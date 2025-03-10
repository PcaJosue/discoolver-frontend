const icons = {

    home: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7.99998L11.7317 3.13414C11.9006 3.04969 12.0994 3.04968 12.2683 3.13414L22 7.99998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    ),
    wishlist: (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 8.86222C22.5 10.4087 21.9062 11.8941 20.8458 12.9929C18.4049 15.523 16.0374 18.1613 13.5053 20.5997C12.9249 21.1505 12.0042 21.1304 11.4488 20.5547L4.15376 12.9929C1.94875 10.7072 1.94875 7.01723 4.15376 4.73157C6.38044 2.42345 10.0079 2.42345 12.2346 4.73157L12.4998 5.00642L12.7648 4.73173C13.8324 3.6245 15.2864 3 16.8053 3C18.3242 3 19.7781 3.62444 20.8458 4.73157C21.9063 5.83045 22.5 7.31577 22.5 8.86222Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>

    ),
    search: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 18C8 20.4148 9.79086 21 12 21C15.7587 21 17 18.5 14.5 13.5C11 18 10.5 11 11 9C9.5 12 8 14.8177 8 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 21C17.0495 21 20 18.0956 20 13.125C20 8.15444 12 3 12 3C12 3 4 8.15444 4 13.125C4 18.0956 6.95054 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    calendar: (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 4V2M15.5 4V6M15.5 4H11M3.5 10V19C3.5 20.1046 4.39543 21 5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V10H3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 10V6C3.5 4.89543 4.39543 4 5.5 4H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.5 10V6C21.5 4.89543 20.6046 4 19.5 4H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    'my-trip': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 19L3.78974 20.7368C3.40122 20.8663 3 20.5771 3 20.1675V5.43246C3 5.1742 3.16526 4.94491 3.41026 4.86325L9 3M9 19L15 21M9 19V3M9 3L15 5M15 21L20.5897 19.1368C20.8347 19.0551 21 18.8258 21 18.5675V3.83246C21 3.42292 20.5988 3.13374 20.2103 3.26325L15 5M15 21V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    menu: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    filter: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3C7.8954 3 7 3.89543 7 5C7 6.10457 7.8954 7 9 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.8954 17 7 17.8954 7 19C7 20.1046 7.8954 21 9 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 5H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 19H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 5H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 19H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 12H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    ),
    dropdown: (
        <svg width="100%" height="100%" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    ),
    info: (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12.25V17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8.26013L12.01 8.24902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 22.75C17.5228 22.75 22 18.2728 22 12.75C22 7.22715 17.5228 2.75 12 2.75C6.47715 2.75 2 7.22715 2 12.75C2 18.2728 6.47715 22.75 12 22.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    ),
    star: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.72459 5.49048L7.45628 2.00234C7.67854 1.55456 8.32081 1.55456 8.54308 2.00234L10.2747 5.49048L14.1473 6.05328C14.6442 6.12549 14.8422 6.73277 14.4825 7.0811L11.6808 9.79437L12.342 13.6274C12.4269 14.1197 11.9073 14.495 11.4627 14.2626L7.99968 12.4518L4.53666 14.2626C4.09208 14.495 3.5724 14.1197 3.65731 13.6274L4.31851 9.79437L1.51684 7.0811C1.15712 6.73277 1.35516 6.12549 1.85202 6.05328L5.72459 5.49048Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    pin: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3337 6.85433C13.3337 9.79986 8.00033 14.8543 8.00033 14.8543C8.00033 14.8543 2.66699 9.79986 2.66699 6.85433C2.66699 3.90881 5.05481 1.521 8.00033 1.521C10.9459 1.521 13.3337 3.90881 13.3337 6.85433Z" stroke="currentColor" />
            <path d="M7.99967 7.52083C8.36787 7.52083 8.66634 7.22237 8.66634 6.85417C8.66634 6.48598 8.36787 6.1875 7.99967 6.1875C7.63147 6.1875 7.33301 6.48598 7.33301 6.85417C7.33301 7.22237 7.63147 7.52083 7.99967 7.52083Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    ),
    close: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 3.5L8 8M8 8L3.5 12.5M8 8L12.5 12.5M8 8L12.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    ),
    save: (
        <svg width="100%" height="100%  " viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 21.5002V5.50018C5 4.39561 5.89543 3.50018 7 3.50018H17C18.1046 3.50018 19 4.39561 19 5.50018V21.5002L13.0815 17.6955C12.4227 17.2719 11.5773 17.2719 10.9185 17.6955L5 21.5002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    share: (
        <svg width="100%" height="100%" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 22.5002C19.6569 22.5002 21 21.1571 21 19.5002C21 17.8433 19.6569 16.5002 18 16.5002C16.3431 16.5002 15 17.8433 15 19.5002C15 21.1571 16.3431 22.5002 18 22.5002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 8.50018C19.6569 8.50018 21 7.15703 21 5.50018C21 3.84333 19.6569 2.50018 18 2.50018C16.3431 2.50018 15 3.84333 15 5.50018C15 7.15703 16.3431 8.50018 18 8.50018Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 15.5002C7.65685 15.5002 9 14.1571 9 12.5002C9 10.8433 7.65685 9.50018 6 9.50018C4.34315 9.50018 3 10.8433 3 12.5002C3 14.1571 4.34315 15.5002 6 15.5002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.5 7.00018L8.5 11.0002" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8.5 14.0002L15.5 18.0002" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
    pin: (
        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3332 6.66665C13.3332 9.61218 7.99984 14.6666 7.99984 14.6666C7.99984 14.6666 2.6665 9.61218 2.6665 6.66665C2.6665 3.72113 5.05432 1.33331 7.99984 1.33331C10.9454 1.33331 13.3332 3.72113 13.3332 6.66665Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8.00016 7.33333C8.36836 7.33333 8.66683 7.03487 8.66683 6.66667C8.66683 6.29848 8.36836 6 8.00016 6C7.63196 6 7.3335 6.29848 7.3335 6.66667C7.3335 7.03487 7.63196 7.33333 8.00016 7.33333Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    open: (
        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6667 8H8M8 8L10 10M8 8L10 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.6668 4V3.33333C12.6668 2.59695 12.0699 2 11.3335 2H4.66683C3.93045 2 3.3335 2.59695 3.3335 3.33333V12.6667C3.3335 13.4031 3.93045 14 4.66683 14H11.3335C12.0699 14 12.6668 13.4031 12.6668 12.6667V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    ),
    point: (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 15V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 9V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )

};

export default icons;