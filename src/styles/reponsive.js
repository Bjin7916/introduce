const { useMediaQuery } = require("react-responsive")

function ResponsiveWep(){

    const isDesktopOrMobile = useMediaQuery({query: '(max-width:768)'})

    return(
        <div>
            {isDesktopOrMobile !== true ? <div>모바일</div> : <div>PC</div>}
        </div>
    )
}
export default ResponsiveWep;