export const PAGES_MENU = [
    {
      path: 'pages',
      children: [
        {
          path: 'upload',  // path for our page
          data: { // custom menu declaration
            menu: {
              title: 'Upload', // menu title
              icon: 'ion-android-home', // menu icon
              pathMatch: 'prefix', // use it if item children not displayed in menu
              selected: false,
              expanded: false,
              order: 0
            }
          }
        },
        {
          path: 'dashboard',
          data: {
            menu: {
              title: 'Dashboard',
              icon: 'ion-android-home',
              selected: false,
              expanded: false,
              order: 0
            }
          }
        }
      }
    }
  ]