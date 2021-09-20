import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const Button = (props) => {
    const {to} = props
    const ButtonComp = props.bgColor

        ? ( 
            <Link href={to}>
                <a className={utilStyles.styledButtonBg} >
                    {props.children}
                </a> 
            </Link>
        )
        : (
            <Link href={to}>
                <a className={utilStyles.styledButton}>
                    {props.children}
                </a>
            </Link>
        )

    return ButtonComp;
}
 
export default Button;