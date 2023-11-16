import {

    IonPage,
    IonContent,
    IonTitle,
    IonMenu,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonRouterOutlet,
    IonSplitPane,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,

} from "@ionic/react";
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, useHistory, useLocation } from "react-router";
import Articles from './admin/articles/Articles';
import Media from './admin/media/Media';

import TrashArticle from './admin/articles/TrashArticle';

import Blog from './user/blog/Blog';
import ViewBlog from './user/blog/ViewBlog';

import GroupComponent from './admin/Group';
import ChangePassword from './ChangePassword';

import Category from './admin/Category';
import CategoryBlog from './user/blog/CategoryBlog';



const Dashboard: React.FC = () => {
    const admin = (localStorage.getItem('role') == 'ar_mgmt' ||
        localStorage.getItem('role') == 'ar_admin' ||
        localStorage.getItem('role') == 'ar_staff1' ||
        localStorage.getItem('role') == 'ar_staff2');
    const user = (localStorage.getItem('role') == '');


    return (
        <>
            {admin && (
                <Route path="/dashboard" component={AdminDashboard} />
            )
            }
           
            {user && (
                <Route path="/dashboard" component={UserDashboard} />
            )
            }

        </>
    );
};


const AdminDashboard: React.FC = () => {

    return (

        <IonSplitPane when='sm' contentId="main-content">
            <AdminMenu />

            <IonPage id="main-content">

                <TemporaryHeader />

                <IonContent >
                    <IonRouterOutlet id="main-content">
                        <Route path="/dashboard/media" exact>
                            <Media />
                        </Route>
                        <Route path="/dashboard/article" exact>
                            <Articles />
                        </Route>
                        <Route path="/dashboard/category" exact>
                            <Category />
                        </Route>
                        <Route path="/dashboard/group" exact>
                            <GroupComponent />
                        </Route>
                       
                        <Route path="/dashboard/trash" exact>
                            <TrashArticle />
                        </Route>
                        <Route path="/dashboard/change">
                            <ChangePassword />
                        </Route>
                        {/* Default Redirect */}
                        <Route path="/dashboard" exact>
                            <Redirect to="/dashboard/article" />
                        </Route>
                    </IonRouterOutlet>
                </IonContent>

            </IonPage>

        </IonSplitPane>

    );
};

const UserDashboard: React.FC = () => {


    return (

        <IonSplitPane when='sm' contentId="main-content">
    

            <UserMenu />
            <IonPage id="main-content">

                <TemporaryHeader />

                <IonContent >
                    <IonRouterOutlet id="main-content">
                        <Route path="/dashboard/blog" exact>
                            <Blog />
                        </Route>
                        <Route path="/dashboard/blog/:slug" exact>
                            <CategoryBlog />
                        </Route>
                        <Route path="/dashboard/blog/:date/:date/:date/:slug" exact>
                            <ViewBlog />
                        </Route>
                        
                        <Route path="/dashboard/change">
                            <ChangePassword />
                        </Route>

                        {/* Default Redirect */}
                        <Route path="/dashboard" exact>
                            <Redirect to="/dashboard/blog" />
                        </Route>
                    </IonRouterOutlet>
                </IonContent>

            </IonPage>

        </IonSplitPane>

    );
};
const TemporaryHeader: React.FC = () => {
    const location = useLocation();
    const title = () => {
       
        if (location.pathname === "/dashboard/media") return "Gallery";
        if (location.pathname === "/dashboard/blog") return "Blog";
        if (location.pathname === "/dashboard/article") return "Article";
        if (location.pathname === "/dashboard/group") return "Group";
        if (location.pathname === "/dashboard/category") return "Category";
       
        if (location.pathname === "/dashboard/trash") return "TrashArticle";

    };
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>{title()}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

const UserMenu: React.FC = () => {
    const location = useLocation()
    const history = useHistory();
   
    const bClick = () => {
      
            history.push("/dashboard/blog");
        
    }


    return (
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar color="light" >
                    <IonTitle> {localStorage.getItem("username")}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>

                    <IonMenuToggle autoHide={false}>
                        <IonItem onClick={bClick} className={location.pathname === '/dashboard/blog' ? "selected" : ''} routerLink='#' routerDirection="none">
                            <IonLabel >Blog</IonLabel>
                        </IonItem>
                       

                    </IonMenuToggle>
                </IonList>

            </IonContent>
        </IonMenu>
    );
};

const AdminMenu: React.FC = () => {


    const location = useLocation()
    return (
        <IonMenu contentId="main-content">
            <IonHeader>
                <IonToolbar color="light" >
                    <IonTitle> {localStorage.getItem("username")}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>

                    <IonMenuToggle autoHide={false}>
                        <IonItem className={location.pathname === '/dashboard/media' ? "selected" : ''} routerLink="/dashboard/media" routerDirection="none">
                            <IonLabel>Media Gallery</IonLabel>
                        </IonItem>
                        <IonItem className={location.pathname === '/dashboard/article' ? "selected" : ''} routerLink="/dashboard/article" routerDirection="none">
                            <IonLabel>Articles</IonLabel>
                        </IonItem>
                        <IonItem className={location.pathname === '/dashboard/category' ? "selected" : ''} routerLink="/dashboard/category" routerDirection="none">
                            <IonLabel>Categories</IonLabel>
                        </IonItem>
                        <IonItem className={location.pathname === '/dashboard/group' ? "selected" : ''} routerLink="/dashboard/group" routerDirection="none">
                            <IonLabel>Groups</IonLabel>
                        </IonItem>
                        
                        <IonItem className={location.pathname === '/dashboard/trash' ? "selected" : ''} routerLink="/dashboard/trash" routerDirection="none">
                            <IonLabel>Trash</IonLabel>
                        </IonItem>

                    </IonMenuToggle>
                </IonList>

            </IonContent>
        </IonMenu>
    );
};


export default Dashboard;