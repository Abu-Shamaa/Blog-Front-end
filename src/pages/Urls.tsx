//const baseUrl = "https://api-el.finworld.com";
const baseUrl = "http://elearnb.test";
export const tinyMceKey = "4ssv18itj219ypjz3qswnxzqmm2hweixk8npflz0yvf3edim";
export default baseUrl;

export const api = {

    changePassword: "/api/change/password",
    signUp: "/api/auth/register",
    checkUser: "/api/users/",

    //**** ADMIN *****//
    /////////media
    media: "/api/media",

    ///////// articles
    checkSlug: "/api/article/",
    createArticle: "/api/add/article",
    createSlug: "/api/slug/create",
    login: "/api/auth/login",
    allArticle: "/api/articles",
    editArticle: "/api/edit/articles/",
    updatetArticle: "/api/update/articles/",
    deleteArticle: "/api/delete/articles/",
    trashArticle: "/api/articles/trash",
    restoreArticle: "/api/restore/articles/",
    forceDelete: "/api/forceDelete/articles/",
    approveArticle: "/api/appropve/articles/",

    /////////category
    allCategory: "/api/category",
    addCategory: "/api/add/category",
    deleteCategory: "/api/delete/category/",
    showCategory: "/api/show/category/",
    updateCategory: "/api/update/category/",
    slugCheck: "/api/category/",
    categorySlug: "/api/category/slug",

    /////////group
    allGroup: "/api/groups",
    addGroup: "/api/add/group",
    deleteGroup: "/api/delete/groups/",
    editGroup: "/api/edit/groups/",
    updateGroup: "/api/update/groups/",

   
    //********* User ******//

    blog: "/api/user/articles",

    viewArticle: "/api/show/articles/",
   

};

export const web = {
    createArticle: "/api/add/article",
    login: "/api/auth/login",
    allArticle: "/api/articles",
    editArticle: "/api/update/articles/",
    deleteArticle: "/api/delete/articles/",
    viewArticle: "/api/show/articles/",

    category: "/category",
};