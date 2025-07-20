
## Tech Stack

- **Framework**: LitElement 3.0
- **Web Components**: Native browser support
- **Routing**: Vaadin Router
- **State Management**: Custom in-memory store with Local Storage
- **Form Validation**: VeeValidate
- **Date Formatting**: date-fns
- **Testing**: @web/test-runner + @open-wc/testing
- **Build Tool**: Vite
- **Styling**: CSS
- **Icons**: Iconify
- **Internationalization**: Custom localization library

## Architecture

- **This project is built on**: lit-element-starter-js template (based on study pdf)
- **Uses LitElement 3.0** for reactive web components
- **Implements Vaadin Router** for client-side routing (as specified in the study pdf)
- **Custom Store**: Built a lightweight in-memory store with Local Storage persistence
- **VeeValidate**: for validation
- **date-fns**: Used for date formatting
- **Vite**: Replaced web-dev-server due to historyApiFallback issues
- **Custom Localization**: Built a custom i18n system without any 3rd party library.
- **Testing**: Used the preferred Lit testing stack (@web/test-runner + @open-wc/testing)


## Project Structure

```
src/
├── components/         
│   ├── navbar.js       
│   ├── employee-form.js 
│   ├── employee-card.js 
│   ├── data-table.js   
│   ...
├── pages/              
│   └── employee-list.js 
├── store/             
│   └── index.js        
├── utils/              
│   ├── formatters.js   
│   └── vee-validation.js 
├── router/             
│   └── router.js       

├── localization.js     
└── index.js           

test/                   
├── employee-list_test.js 
├── navbar_test.js    
├── store_test.js      
└── utils_test.js    
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd lit-study

# Install dependencies
npm install
```

### Development
```bash
# Start development server
npm run serve

# Run tests
npm test
