import worldLogo from '../assets/world.png'

export default function Navbar() {
    return (
        <nav className="relative shadow bg-gradient-to-r from-gray-900 to-gray-700 w-full border-b-2 border-b-slate-950">
            <div className="relative h-16 mx-auto max-w-7xl flex items-center justify-center text-white">
                <svg className="pr-2" version="1.1" width="32px" height="32px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M32.001,0.887c17.184,0,31.113,13.929,31.112,31.113 C63.114,49.185,49.184,63.115,32,63.113C14.815,63.114,0.887,49.185,0.888,32.001C0.885,14.816,14.815,0.887,32.001,0.887z"></path> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="32" y1="1" x2="32" y2="63"></line> <line fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" x1="63" y1="32" x2="1" y2="32"></line> <path fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M30,1c0,0-14,11-14,31s14,31,14,31"></path> <path fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M34,1c0,0,14,11,14,31S34,63,34,63"></path> <path fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M8,12c0,0,5,10,24,10s24-10,24-10"></path> <path fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M8,52c0,0,5-10,24-10s24,10,24,10"></path> </g></svg>
                <a className="text-2xl hover:scale-[1.02] hover:shadow-sm" href="">Deniz's Travel Journal</a>
            </div>
        </nav>
    )
}