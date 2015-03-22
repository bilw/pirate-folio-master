var portfolioApp = angular.module("portfolioSharingApp", ["ngRoute"]);

portfolioApp.config(function ($routeProvider) {
    $routeProvider
        .when("/portfolios",  { controller: "PortfolioListController", templateUrl: "angular/partials/portfolio_list_partial.html" })
        .when("/",  { controller: "PortfolioListController", templateUrl: "angular/partials/portfolio_list_partial.html" })
        .otherwise({ redirectTo: "/404_page", templateUrl: "angular/partials/404.html" });
});