# ROADMAP

1. **Requests**
    
    For now useFetch hook works just fine for requesting data from API. However, as our application grows, we might need more specific functionality. Would be good to implement Redux Toolkit Query for work with requests.  
    
2. **Table**
    
    Since we want all tables look the same in our application  it will work. However we better make it more flexible and customizable like passing classname to table rows, customize table head items rendering. Would be good to use semantic table elements like `<table/>`, `<thead/>` and so on 
    
3. **Popover**
    
    Would be good to implement functionality to the popover component to be able been closed by pressing Esc button, add backdrop covering the rest of the page to prevent interacting with other elements, and also been able to be closed by clicking in any place outside the popover itself. Pass any custom component to popover trigger.
    
4. **Tests**
    
    Of course, every project should have both unit and E2E tests to make sure everything works as it supposed to, and behavior doesnt change unnecessarily.