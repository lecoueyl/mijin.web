module.exports = {
  common: {
    add: 'Add',
    attribute: 'Attribute',
    cancel: 'Cancel',
    collapse: 'Collapse',
    confirm: 'Confirm',
    copyClipboard: 'Copy to clipboard',
    copyCodeError: 'Failed to copy code',
    copyCodeSuccess: 'Code copied',
    copyColorError: 'Failed to copy color name',
    copyColorName: 'Copier color: {name}',
    default: 'Default',
    description: 'Description',
    events: 'Events',
    expand: 'Expand',
    home: 'Home',
    methods: 'Methods',
    menu: 'Menu',
    name: 'Name',
    options: 'Options',
    plugin: 'Plugin',
    presets: 'Presets',
    properties: 'Properties',
    props: 'Props',
    remove: 'Remove',
    required: 'Required',
    slots: 'Slots',
    type: 'Type',
    value: 'Value',
    viewCode: 'View code',
  },

  error: {
    title: 'Page not found',
    notFound: 'Oh, could not find what you are looking for.',
  },

  props: {
    align: 'Align',
    animate: 'Animate',
    bordered: 'Bordered',
    busy: 'Busy',
    centered: 'Centered',
    circle: 'Circle',
    clickable: 'Clickable',
    color: 'Color',
    default: 'Default',
    density: 'Density',
    disabled: 'Disabled',
    dismissButton: 'Dismiss button',
    dismissible: 'Dismissible',
    divided: 'Divided',
    expanded: 'Expanded',
    extension: 'Extension',
    external: 'External',
    filled: 'Filled',
    fixed: 'Fixed',
    group: 'Group',
    gutter: 'Gutter',
    icon: 'Icon',
    iconPosition: 'Icon position',
    image: 'Image',
    inline: 'Inline',
    label: 'Label',
    letter: 'Letter',
    level: 'Level',
    link: 'Link',
    loading: 'Loading',
    mixed: 'Mixed',
    multiple: 'Multiple',
    orderedList: 'Ordered list',
    password: 'Password',
    placeholder: 'Placeholder',
    position: 'Position',
    removable: 'Removable',
    reversed: 'Reversed',
    rounded: 'Rounded',
    score: 'Score',
    secondary: 'Secondary',
    size: 'Size',
    slot: 'Slot',
    sort: 'Sort',
    status: 'Status',
    summary: 'Summary',
    tag: 'Tag',
    tooltip: 'Tooltip',
    truncate: 'Truncate',
    type: 'Type',
    underline: 'Underline',
    variant: 'Variant',
  },

  sections: {
    general: {
      'getting-started': {
        title: 'Getting started',
        installation: 'Installation',
        tailwindIsRequired: 'tailwindcss version >= {version} must be already present in your application',
        addMijinToProject: 'Add Mijin dependency to your project',
        addTailwindPreset: 'Add Mijin Tailwind CSS preset {presetFile} to your Tailwind CSS configuration file {tailwindConfigFile}',
        loadPlugin: 'Load the plugin in your Vue.js or Nuxt.js application',
        purgeCss: 'Add Mijin components path to the PurgeCSS content configuration. This will allow PurgeCSS to analyze all Mijin components CSS classes',
      },
      customization: {
        title: 'Customization',
        description: 'Mijin offers minimal customizations to focus on usability. Yet, the default theme setting can be overridden to give a specific aspect to the UI.',
        tailwindOverride: 'Mijin comes with it\'s Tailwind CSS presets. These presets can be override from your {tailwindConfigFile} file:',
        overrideComponent: 'override a component border-radius',
        overrideColor: 'override a color',
        defaultPresets: 'Default Mijin presets',
        pluginOption: 'The plugin can be initialized with options. For example, to change the default prefix from {fromMj} to {toM}, load the plugin with the following option',
        pluginOptions: {
          prefix: {
            description: 'Component name prefix',
          },
        },
      },
    },

    foundations: {
      title: 'Foundations',

      colors: {
        title: 'Colors',
        primary: 'Primary',
        gray: 'Gray',
        contrast: 'Contrast',
        shorthand: 'Shorthand',
        accents: 'Accents',
      },

      icons: {
        title: 'Icons',
        description: 'Open source icons from {link}',
        noResultsFoundQuery: 'No results found for "{query}"',
      },

      layout: {
        title: 'Layout',
        container: 'Container',
        grid: 'Grid',
        row: 'Row',
      },

      transitions: {
        title: 'Transitions',
        fade: 'Fade',
        fadeX: 'FadeX',
        fadeY: 'FadeY',
      },
    },

    atoms: {
      title: 'Atoms',

      avatar: {
        title: 'Avatar',
      },

      badge: {
        title: 'Badge',
      },

      button: {
        title: 'Button',
      },

      checkbox: {
        title: 'Checkbox',

        events: {
          change: {
            description: 'Emitted when value change',
          },
        },
      },

      collapse: {
        title: 'Collapse',
        events: {
          toggle: {
            description: 'Emitted when collapse is toggled',
          },
        },
        methods: {
          toggleExpand: {
            description: 'Toggle between collapse and expand',
          },
          resizeContent: {
            description: 'Resize content container to fit child element size',
          },
        },
      },

      divider: {
        title: 'Divider',
      },

      headline: {
        title: 'Headline',
      },

      icon: {
        title: 'Icon',
      },

      input: {
        title: 'Input',
      },

      link: {
        title: 'Link',
      },

      list: {
        title: 'List',
      },

      modal: {
        title: 'Modal',

        events: {
          close: {
            description: 'Emitted when modal is closed',
          },
          open: {
            description: 'Emitted when modal is opened',
          },
          toggle: {
            description: 'Emitted when modal is toggled',
          },
        },

        methods: {
          close: {
            description: 'Close modal if open',
          },
          open: {
            description: 'Open modal if close',
          },
          toggle: {
            description: 'Toggle modal visibility',
          },
        },
      },

      note: {
        title: 'Note',
        slots: {
          icon: {
            description: 'Override default icon',
          },
        },
      },

      paragraph: {
        title: 'Paragraph',
      },

      popover: {
        title: 'Popover',

        events: {
          close: {
            description: 'Emitted when popover is closed',
          },
          open: {
            description: 'Emitted when popover is opened',
          },
          toggle: {
            description: 'Emitted when popover is toggled',
          },
        },

        methods: {
          close: {
            description: 'Close popover if open',
          },
          open: {
            description: 'Open popover if close',
          },
          toggle: {
            description: 'Toggle popover visibility',
          },
        },

        slots: {
          content: {
            description: 'Popover content',
          },
        },
      },

      popoveritem: {
        title: 'Popover Item',

        slots: {
          prefix: {
            description: 'Displayed on the left side of the item',
          },

          suffix: {
            description: 'Displayed on the right end side of the item',
          },
        },
      },

      progress: {
        title: 'Progress',
      },

      radio: {
        title: 'Radio',

        events: {
          change: {
            description: 'Emitted when value change',
          },
        },

        slots: {
          summary: {
            description: 'Summary placeholder',
          },
        },
      },

      segmentedControl: {
        title: 'Segmented control',
      },

      segmentedcontrolitem: {
        events: {
          select: {
            description: 'Emitted when an item is selected',
          },
        },
      },

      select: {
        title: 'Select',

        events: {
          select: {
            description: 'Emitted when an option is selected',
          },
        },
      },

      skeleton: {
        title: 'Skeleton',
      },

      statusDot: {
        title: 'Status dot',
      },

      statusIcon: {
        title: 'Status icon',
      },

      table: {
        title: 'Table',
      },

      tabs: {
        title: 'Tabs',
      },

      tag: {
        title: 'Tag',

        events: {
          remove: {
            description: 'Emitted when remove button is triggered',
          },
        },
      },

      textarea: {
        title: 'Textarea',
      },

      toast: {
        title: 'Toast',

        methods: {
          log: {
            description: 'Display a log toast',
          },
          success: {
            description: 'Display a success toast',
          },
          warn: {
            description: 'Display a warn toast',
          },
          error: {
            description: 'Display an error toast',
          },
        },
      },

      toggle: {
        title: 'Toggle',

        events: {
          change: {
            description: 'Emitted when value change',
          },
        },
      },
    },

    organisms: {
      title: 'Organisms',

      form: {
        title: 'Form',

        agreedToTerms: 'Agreed to {terms} and {privacy} statements.',
        alreadyAUser: 'Already a user? {login}',
        department: 'Department',
        email: 'Email',
        emailRequired: 'Email is a required field',
        emailValidation: 'Email is invalid',
        forgotPassword: 'Forgot Password?',
        login: 'Log in',
        password: 'Password',
        passwordPattern: 'Password requires UpperCase, LowerCase, Number/SpecialChar and min 8 Chars',
        passwordRequired: 'Password is a required field',
        privacy: 'Privacy',
        selectDepartment: 'Select a department',
        signIn: 'Sign in',
        signUp: 'Sign up',
        termsOfUse: 'Terms of Use',
        username: 'Username',
        usernamePlaceholder: 'First and Last name',
        vueForm: 'vue-form',
      },

      popover: {
        title: 'Popover',

        actionMenu: 'Action menu',
        addToCalendar: 'Add to calendar',
        copyLink: 'Copy link',
        delete: 'Delete',
        edit: 'Edit',
        fullWidth: 'Full width',
        lastEdit: 'Last edition by John Doe',
        openApp: 'Open in App',
        share: 'Share',
        smallText: 'Small text',
        today: 'Today at 13:37',
        undo: 'Undo',
      },
    },
  },

  theme: {
    dark: 'Dark',
    light: 'Light',
    system: 'System',
  },

  examples: {
    input: {
      error: 'The input format is not valid',
      label: 'Input label',
      placeholder: 'Input placeholder',
      valid: 'The input format is valid',
      value: 'input value',
    },
    items: {
      1: {
        name: 'Banana',
        description: 'A banana is an elongated, edible fruit, botanically a berry. Produced by several kinds of large herbaceous flowering plants in the genus Musa.',
      },
      2: {
        name: 'Orange',
        description: 'The orange is the fruit of various citrus species in the family Rutaceae.',
      },
      3: {
        name: 'Kiwi',
        description: 'It is green on the inside with small black seeds that can be eaten.',
      },
    },
    itemsHeader: {
      name: 'Name',
      description: 'Description',
      count: 'Count',
    },
    link: 'This is a link',
    modal: {
      title: 'Deactivate account',
      description: 'Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.',
    },
    select: {
      label: 'Select label',
      placeholder: 'Select placeholder',
    },
    sentence: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};
