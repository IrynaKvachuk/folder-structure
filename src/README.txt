project structure:
    -> api
    -> components
        --> _common - reusable wrappers and facades of simple elements
        --> _icons
        --> auth - components related with authorization and authentication
        ..other reusable components
    -> context
    -> hooks
    -> layout - layout components and wrappers
    -> pages
    -> store
        --> _common/types - ts interfaces,classes
        --> domainStores - data depended from back
        --> viewStores - data without connection to back (preferences, modals etc.)
    -> styles
        --> /utils
            --> _variables.scss
        --> _base.scss - primary styles
        ..other styles rehearse ./src folder structure 

Each component has its own folder for further nesting (.test, utils, events, etc.) 
and to be opened for extensions.