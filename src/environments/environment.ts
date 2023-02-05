// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const url= 'http://localhost:3000';
export const environment = {
  production:false,
  menu:{
    get: url + '/menu'
  },
  solid: {
    get: url + '/solid_block'
  },
  advantages: {
    get: url + '/advantages'
  },
  wood: {
    get: url + '/wood_work'
  },
  aboutUs: {
    get: url + '/about_us'
  },
  questions: {
    get: url + '/any_questions'
  },
  footer: {
    get: url + '/footer'
  },
  priceList: {
    get: url + '/price_list'
  },
  contact: {
    get: url + '/contact'
  },
  page404: {
    get: url + '/page404'
  },
  slider: {
    get: url + '/slider'
  }
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
