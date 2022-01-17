// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
var klaroConfig = {
    // With the 0.7.0 release we introduce a 'version' paramter that will make
    // if easier for us to keep configuration files backwards-compatible in the future.
    version: 1,

    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',

    // You can override CSS style variables here. For IE11, Klaro will
    // dynamically inject the variables into the CSS. If you still consider
    // supporting IE9-10 (which you probably shouldn't) you need to use Klaro
    // with an external stylesheet as the dynamic replacement won't work there.
    styling: {
        theme: ['light', 'bottom', 'wide'],
    },

    // Setting this to true will keep Klaro from automatically loading itself
    // when the page is being loaded.
    noAutoLoad: false,

    // Setting this to true will render the descriptions of the consent
    // modal and consent notice are HTML. Use with care.
    htmlTexts: true,

    // Setting 'embedded' to true will render the Klaro modal and notice without
    // the modal background, allowing you to e.g. embed them into a specific element
    // of your website, such as your privacy notice.
    embedded: false,

    // You can group services by their purpose in the modal. This is advisable
    // if you have a large number of services. Users can then enable or disable
    // entire groups of services instead of having to enable or disable every service.
    groupByPurpose: true,

    // How Klaro should store the user's preferences. It can be either 'cookie'
    // (the default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'klaro',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 365,

    // You can change to cookie domain for the consent manager itself.
    // Use this if you want to get consent once for multiple matching domains.
    // If undefined, Klaro will use the current domain.
    //cookieDomain: '.github.com',

    // You can change to cookie path for the consent manager itself.
    // Use this to restrict the cookie visibility to a specific path.
    // If undefined, Klaro will use '/' as cookie path.
    //cookiePath: '/',

    // Defines the default state for services (true=enabled by default).
    default: false,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party services.
    mustConsent: false,

    // Show "accept all" to accept all services instead of "ok" that only accepts
    // required and "default: true" services
    acceptAll: true,

    // replace "decline" with cookie manager modal
    hideDeclineAll: false,

    // hide "learnMore" link
    hideLearnMore: false,

    // show cookie notice as modal
    noticeAsModal: false,

    testing: false,

    // You can also remove the 'Realized with Klaro!' text in the consent modal.
    // Please don't do this! We provide Klaro as a free open source tool.
    // Placing a link to our website helps us spread the word about it,
    // which ultimately enables us to make Klaro! better for everyone.
    // So please be fair and keep the link enabled. Thanks :)
    //disablePoweredBy: true,

    // you can specify an additional class (or classes) that will be added to the Klaro `div`
    //additionalClass: 'my-klaro',

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    //lang: 'fr',

    // You can overwrite existing translations and add translations for your
    // service descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
    translations: {
        // translationsed defined under the 'zz' language code act as default
        // translations.
        zz: {
            privacyPolicyUrl: '/#privacy',
        },
        fr: {
            acceptAll: 'Accepter tout',
            acceptSelected: 'Accepter sélectionné',
            privacyPolicyUrl: '/#privacy',
            ok: 'Accepter',
            decline: 'Continuer sans accepter',
            poweredBy: ' ',
            consentNotice: {
                description: '<strong>Ce site utilise des cookies</strong>En acceptant, vous autorisez l’utilisation de cookies pour vous proposer des services et offres éditoriales et publicitaires adaptées à vos centres d’intérêts et mesurer la fréquentation de nos services.',
                learnMore: 'Gérer mes choix',
            },
            consentModal: {
                description: 'Les fonctionnalités de ce site s’appuient en partie sur des services proposés par des tiers essentiellement à des fins statistiques. Si vous donnez votre consentement, ces tiers déposeront des cookies qui vous permettrons de visualiser directement sur notre site du contenu hébergé par ces tiers ou de partager nos contenus. Cette page vous permet de donner ou de retirer votre consentement, soit au global, soit par service.',
                title: 'Personnalisation des cookies',
            },
            privacyPolicy: {
                text: ' ',
            },
            purposeItem: {
                service: 'service',
                services: 'services',
            },
            purposes: {
                analytics: 'Mesure d\'audience',
                marketing: 'Marketing',
                functional: 'Cookies fonctionnels'
            },
            service: {
                purpose: 'Objet',
            },
            language_selector: {
                description: 'Permet à votre navigateur de conserver en mémoire la langue sélectionnée tout au long de votre visite sur notre site.',
                title: 'Sélecteur de langues',
            },
        },
        // If you erase the "consentModal" translations, Klaro will use the
        // bundled translations.
        en: {
            acceptAll: 'Accept all',
            acceptSelected: 'Accept selected',
            privacyPolicyUrl: '/#privacy',
            ok: 'I accept',
            decline: 'No, thank you',
            poweredBy: ' ',
            consentNotice: {
                description: '<strong class="klaro_title">Do you accept our use of cookies?</strong>ILB is a non-profit association governed by the law of 1901. In this respect, your data will not be used for advertising or marketing purposes, nor will it be shared with or resold to other organizations/partners.<br /><br />It is simply used to improve your user experience and to allow you to benefit from our research productions (publications, videos, podcasts, MOOCs...) that are free of charge.<br /><br />For more information, please read <a href="https://www.institutlouisbachelier.org/en/privacy-and-personal-data-policy/" target="_blank">our privacy policy</a>.',
                learnMore: 'I choose',
            },
            consentModal: {
                title: 'Customize cookies',
                description: 'The functionality of this site relies in part on services provided by third parties primarily for statistical purposes. If you give your consent, these third parties will set cookies that will allow you to view content hosted by them directly on our site or to share our content. This page allows you to give or withdraw your consent, either in aggregate or by service.',
            },
            privacyPolicy: {
                text: ' ',
            },
            purposeItem: {
                service: 'service',
                services: 'services',
            },
            purposes: {
                analytics: 'Analytics',
                marketing: 'Marketing',
                functional: 'Fonctional cookies'
            },
            service: {
                purpose: 'purpose',
            },
            language_selector: {
                description: 'Allows your browser to remember the selected language throughout your visit to our site.',
                title: 'Language selector',
            },
        },
    },

    // This is a list of third-party services that Klaro will manage for you.
    services: [
        {
            name: 'GTM',
            title: 'Google Analytics',
            purposes: ['analytics'],
        },
    ],
};
