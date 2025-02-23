
const icons = {

    home: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7.99998L11.7317 3.13414C11.9006 3.04969 12.0994 3.04968 12.2683 3.13414L22 7.99998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    ),
    wishlist: (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 8.86222C22.5 10.4087 21.9062 11.8941 20.8458 12.9929C18.4049 15.523 16.0374 18.1613 13.5053 20.5997C12.9249 21.1505 12.0042 21.1304 11.4488 20.5547L4.15376 12.9929C1.94875 10.7072 1.94875 7.01723 4.15376 4.73157C6.38044 2.42345 10.0079 2.42345 12.2346 4.73157L12.4998 5.00642L12.7648 4.73173C13.8324 3.6245 15.2864 3 16.8053 3C18.3242 3 19.7781 3.62444 20.8458 4.73157C21.9063 5.83045 22.5 7.31577 22.5 8.86222Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
        
    ),
    search: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 18C8 20.4148 9.79086 21 12 21C15.7587 21 17 18.5 14.5 13.5C11 18 10.5 11 11 9C9.5 12 8 14.8177 8 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 21C17.0495 21 20 18.0956 20 13.125C20 8.15444 12 3 12 3C12 3 4 8.15444 4 13.125C4 18.0956 6.95054 21 12 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    ),
    calendar: (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 4V2M15.5 4V6M15.5 4H11M3.5 10V19C3.5 20.1046 4.39543 21 5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V10H3.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.5 10V6C3.5 4.89543 4.39543 4 5.5 4H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.5 2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.5 10V6C21.5 4.89543 20.6046 4 19.5 4H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    ),
    'my-trip': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 19L3.78974 20.7368C3.40122 20.8663 3 20.5771 3 20.1675V5.43246C3 5.1742 3.16526 4.94491 3.41026 4.86325L9 3M9 19L15 21M9 19V3M9 3L15 5M15 21L20.5897 19.1368C20.8347 19.0551 21 18.8258 21 18.5675V3.83246C21 3.42292 20.5988 3.13374 20.2103 3.26325L15 5M15 21V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    ),
    menu: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 12H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    ),
    filter: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3C7.8954 3 7 3.89543 7 5C7 6.10457 7.8954 7 9 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.8954 17 7 17.8954 7 19C7 20.1046 7.8954 21 9 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 5H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 19H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 5H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 19H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3 12H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )

};



function SVGIcon({ name, color = "black", width=24, height=24 }) {
    return (
        <span style={{ display: "inline-block", width: width, height: height, color }}>
            {icons[name]}
        </span>
    );
}

export default SVGIcon;