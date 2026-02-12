# React + TypeScript + Vite

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Tools & Frameworks

- **React 19** - Frontend framework for building the user interface
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework for styling
- **React Query** - Data fetching and state management library
- **React Hook Form** - Form handling and validation
- **Axios** - HTTP client for API requests

## Implementation Details

### Data Fetching & Error Handling
- **React Query** for asynchronous data fetching with built-in loading and error states
- **Axios** over fetch API - automatically treats non-200 status codes as errors
- Chose not to implement Suspense to maintain direct control over loading states

## Future Improvements

### Performance Enhancements
- Implement pagination for the pet list to improve load times and usability
- Add search functionality to filter pets by name or type
- Use virtual scrolling with infinite loading to render only visible items

### User Experience
- Enhanced loading states with clearer visual feedback
- Drawer component for detailed pet viewing
- Color-coded status tags for better visual hierarchy
- Collapsible header to maximize content space
- Pet pinning functionality for user favorites
- Image upload capability for pet profiles
