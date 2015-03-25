var portfolioApp = angular.module("portfolioSharingApp", ["ngRoute"]);

portfolioApp.config(function ($routeProvider) {
    $routeProvider
        .when("/portfolios",  { controller: "PortfolioListController", templateUrl: "angular/partials/portfolio_list_partial.html" })
        .when("/",  { controller: "PortfolioListController", templateUrl: "angular/partials/portfolio_list_partial.html" })
        .otherwise({ controller: "PortfolioListController", templateUrl: "angular/partials/404_partial.html" });
});