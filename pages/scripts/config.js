/* ============================================================
 * File: config.js
 * Configure routing
 * ============================================================ */

angular.module('mallowtechApp')
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('app', {
                    abstract: true,
                    //url: "/",
                    templateUrl: "views/app.html"
                })
                .state('app.home', {
                    url: "/home",
                    templateUrl: "views/home.html"
                })
                .state('app.about', {
                    url: "/about",
                    templateUrl: "views/about.html",
                    controller: "AboutCtrl"
                })
                .state('app.whyus', {
                    url: "/why-us",
                    templateUrl: "views/why-us.html",
                    controller: "AboutCtrl"
                })
                .state('app.contact', {
                    url: "/contact",
                    templateUrl: "views/contact.html"
                })
                .state('app.career', {
                    url: "/career",
                    templateUrl: "views/career.html"
                })
                .state('app.blog', {
                    url: "/blog",
                    templateUrl: "views/blog.html"
                })
                .state('app.faq', {
                    url: "/faq",
                    templateUrl: "views/faq.html"
                })
                .state('app.how-we-do', {
                    url: "/services/how-we-do",
                    templateUrl: "views/how-we-do.html"
                })
                .state('app.what-we-do', {
                    url: "/services/what-we-do",
                    templateUrl: "views/what-we-do.html"
                })
                .state('app.android', {
                    url: "/services/android",
                    templateUrl: "views/android.html"
                })
                .state('app.ios', {
                    url: "/services/ios",
                    templateUrl: "views/ios.html"
                })
                .state('app.php', {
                    url: "/services/php",
                    templateUrl: "views/php.html"
                })
                .state('app.ror', {
                    url: "/services/ror",
                    templateUrl: "views/ror.html"
                })
                .state('app.testing', {
                    url: "/services/testing",
                    templateUrl: "views/testing.html"
                })
                .state('app.ui', {
                    url: "/services/ui",
                    templateUrl: "views/ui.html"
                })
                .state('app.front-end', {
                    url: "/services/front-end",
                    templateUrl: "views/front-end.html"
                })
                .state('app.end-to-end', {
                    url: "/services/end-to-end",
                    templateUrl: "views/end-to-end.html"
                })
                .state('app.consultation', {
                    url: "/services/consultation",
                    templateUrl: "views/consultation.html"
                })
                .state('app.team', {
                    url: "/about/team",
                    templateUrl: "views/team.html"
                })
                .state('app.portfolio', {
                    url: "/about/portfolio",
                    templateUrl: "views/portfolio.html"
                })
                .state('app.portfolio-belinked', {
                    url: "/about/portfolio/belinked",
                    templateUrl: "views/belinked.html"
                })
                .state('app.portfolio-fleetRover', {
                    url: "/about/portfolio/live-monitoring",
                    templateUrl: "views/fleetRover.html"
                })
                .state('app.portfolio-bizCover', {
                    url: "/about/portfolio/biz-cover",
                    templateUrl: "views/bizCover.html"
                })
                .state('app.portfolio-convertX', {
                    url: "/about/portfolio/convertX",
                    templateUrl: "views/convertX.html"
                })
                .state('app.portfolio-crg', {
                    url: "/about/portfolio/CRG",
                    templateUrl: "views/crg.html"
                })
                .state('app.portfolio-formulaMax', {
                    url: "/about/portfolio/formula-MAX",
                    templateUrl: "views/FormulaMax.html"
                })
                .state('app.portfolio-frankfurtMetro', {
                    url: "/about/portfolio/frankfurt-metro",
                    templateUrl: "views/frankfurtMetro.html"
                })
                .state('app.portfolio-gardenCompass', {
                    url: "/about/portfolio/garden-compass",
                    templateUrl: "views/gardenCompass.html"
                })
                .state('app.portfolio-knowde', {
                    url: "/about/portfolio/knowde",
                    templateUrl: "views/knowde.html"
                })
                .state('app.portfolio-kvb', {
                    url: "/about/portfolio/KVB",
                    templateUrl: "views/kvb.html"
                })
                .state('app.portfolio-movingHome', {
                    url: "/about/portfolio/moving-home",
                    templateUrl: "views/movingHome.html"
                })
                .state('app.portfolio-myTamilDate', {
                    url: "/about/portfolio/my-tamil-date",
                    templateUrl: "views/myTamilDate.html"
                })
                .state('app.portfolio-neenahPaper', {
                    url: "/about/portfolio/neenah-paper",
                    templateUrl: "views/neenahPaper.html"
                })
                .state('app.portfolio-outlate', {
                    url: "/about/portfolio/outlate",
                    templateUrl: "views/outlate.html"
                })
                .state('app.portfolio-parisByMetro', {
                    url: "/about/portfolio/paris-by-metro",
                    templateUrl: "views/parisByMetro.html"
                })
                .state('app.portfolio-phokl', {
                    url: "/about/portfolio/phokl",
                    templateUrl: "views/phokl.html"
                })
                .state('app.portfolio-plantsnapp', {
                    url: "/about/portfolio/plantsnapp",
                    templateUrl: "views/plantsnapp.html"
                })
                .state('app.portfolio-soterria', {
                    url: "/about/portfolio/soterria",
                    templateUrl: "views/soterria.html"
                })
                .state('app.portfolio-twuth', {
                    url: "/about/portfolio/twuth",
                    templateUrl: "views/twuth.html"
                })
                .state('app.portfolio-apexAllaince', {
                    url: "/about/portfolio/apex",
                    templateUrl: "views/apex.html"
                })
                .state('app.portfolio-app_video_machine', {
                    url: "/about/portfolio/avm",
                    templateUrl: "views/app_video_machine.html"
                })
                .state('app.portfolio-bubbleology', {
                    url: "/about/portfolio/bubbleology",
                    templateUrl: "views/bubbleology.html"
                })
                .state('app.portfolio-continuo_care', {
                    url: "/about/portfolio/msm",
                    templateUrl: "views/continuo_care.html"
                })
                .state('app.portfolio-little_black_saree', {
                    url: "/about/portfolio/little-black-saree",
                    templateUrl: "views/little_black_saree.html"
                })
                .state('app.portfolio-MAS', {
                    url: "/about/portfolio/mas",
                    templateUrl: "views/MAS.html"
                })
                .state('app.portfolio-men_you', {
                    url: "/about/portfolio/irc&pos",
                    templateUrl: "views/men_you.html"
                })
                .state('app.portfolio-positivitea', {
                    url: "/about/portfolio/positivitea",
                    templateUrl: "views/positivitea.html"
                })
                .state('app.portfolio-time_ledger', {
                    url: "/about/portfolio/time-ledger",
                    templateUrl: "views/time_ledger.html"
                })
                .state('app.portfolio-yes', {
                    url: "/about/portfolio/yes",
                    templateUrl: "views/yes.html"
                })
                .state('app.service-whom-do-we-offer', {
                    url: "/about/services/whom-do-we-offer",
                    templateUrl: "views/whom-do-we-offer.html"
                })
                .state('app.about-history', {
                    url: "/about/history",
                    templateUrl: "views/history.html"
                })
                .state('app.blog-redirect', { //Handled URLs having Date in it
                    url: "/{year:int}/{month:int}/{date:int}/{blogName:string}/",
                    controller: "BlogRedirect"
                })
                .state('app.blog-redirect-without-date', { //Handled URLs without Date in it
                    url: "/{year:int}/{month:int}/{blogName:string}/",
                    controller: "BlogRedirect",
                    params : {
                        date : ""
                    }
                });

            $urlRouterProvider
                .otherwise('/home');
        }
    ]);