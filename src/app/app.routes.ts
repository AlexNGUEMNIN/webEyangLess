import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'website/detail-city',
        pathMatch: 'full'
    },
    {
        path: '',
        title: 'Application',
        component: AppComponent
    },

    // {
    //     path : "admin/connxxxion",
    //     title: "Connexion",
    //     component: ConnexionComponent
    // },

    // { path: 'bailleur', loadChildren: () => import('./pages/bailleur/bailleur.module').then(m => m.BailleurModule) },
    // { path: 'user', loadChildren: () => import('./pages/utilisateur/utilisateur.module').then(m => m.UtilisateurModule) },
    // { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
    { path: 'website', loadChildren: () => import('./pages/website/website.module').then(m => m.WebsiteModule)},

    // Routes d'authentification


    // Routes de l'administrateur
    //  {
    //     path: '',
    //     children: [
    //         {
    //             path: 'dashboard',
    //             title: 'Tableau de bord',
    //             component: DashboardComponent
    //         },
    //         {
    //             path: 'cities',
    //             title: 'Cités',
    //             component: CitiesListComponent
    //         },
    //         {
    //             path: 'details-cites/:id',
    //             title: 'Details Cités',
    //             component: DetailsCitiesComponent
    //         },
    //         {
    //             path: 'map',
    //             title: 'Carte',
    //             component: MapComponent
    //         },
    //         {
    //             path: 'users',
    //             title: 'Utilisateurs',
    //             component: UsersComponent
    //         },
    //         {
    //             path: 'my-account',
    //             title: 'Mon compte',
    //             component: MyAccountComponent
    //         },
    //         {
    //             path: 'settings',
    //             title: 'Paramètres',
    //             component: SettingsComponent
    //         },
    //     ]
    //   }

];
