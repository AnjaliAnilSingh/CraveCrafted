import React from 'react'
import { Link } from 'react-router-dom'
import RecipeElements from '../../assets/RecipeElements.png'

function CategoryItem({name, href, backgroundColor, color}) {
    const style = {
        backgroundColor: backgroundColor,
        color: color,
        borderColor: color
    }
    return (
        <div>
            <Link to= {href} className="rounded-full ">
                <div className="uppercase px-6 py-2 mt-[80px] text-center rounded-full" style={style}>{name}</div>
            </Link>
        </div>
    )
}
function CategoryList() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8">
            <CategoryItem name="breakfast" href="/categories/breakfast" backgroundColor="#C1D8C3" color="#59871f" />
            <CategoryItem name="lunch" href="/categories/lunch" backgroundColor="#FFCFB3" color="#59871f" />
            <CategoryItem name="dinner" href="/categories/dinner" backgroundColor="#FFAD60" color="#59871f" />
            <CategoryItem name="drinks" href="/categories/drinks" backgroundColor="#FFE1FF" color="#59871f" />
            <CategoryItem name="desserts" href="/categories/desserts" backgroundColor="#D4BDAC" color="#59871f" />
        </div>
    )
}
const CategoryWrapper = () => {
    return (
        <CategoryList/>
    )
}

export default CategoryWrapper
