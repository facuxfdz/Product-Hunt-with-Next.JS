import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const Button = (props) => {

    const ButtonComp = props.bgColor 

        ? ( 
            <Link href={props.href}>
                <a
                className={utilStyles.styledButtonBg}>
                    {props.children}
                </a> 
            </Link>
        )
        : (
            <Link href={props.href}>
                <a 
                href={props.href}
                className={utilStyles.styledButton}>
                    {props.children}
                </a>
            </Link>
        )

    return ButtonComp;
}
 
export default Button;