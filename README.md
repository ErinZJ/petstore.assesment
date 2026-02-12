# React + TypeScript + Vite

# Loading and error handling
I used react queries to manage the asynchronous data fetching and error handling.
React Query is a powerful library that simplifies the process of fetching, caching, and updating data in a React application. It provides a simple events for handling loading and errors. I chose not to use susoense, while it is a powerful feature it did not fit into what i was doing now. 
I aslo you Axious instead of fetch as the non 200 status code are treated as treated as errors where the standard fetch we need to handle them ourselves 

# Performance improvements 
I woukld add pagination to the list of pets to improve performance and usablity. A search bar to filter the pets by name or type would also be useful.
If i decided to use the infanite scrolling i use a virtual list to only render what the use can see. 

# UX improvements
Adding clearier loading states 
Using a drawer to dispklay the viewed pet
Adding a unique colour ro the status tag 
Collapsible header 
Allowing for pinned pets for the user to keep track pets they are interested in. 
Image upload functionality
