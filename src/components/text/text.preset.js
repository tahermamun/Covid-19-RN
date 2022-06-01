import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";


const BASE={
    fontFamily: typography.primary,
    fontSize: spacing[4],
    color:colors.white
}
const BASE_BOLD={
    fontFamily: typography.primaryBold,
    fontSize: spacing[4],
    color:colors.white
}
const BOLD={
    fontFamily: typography.bold,
    color:colors.white
}
export const presets={
    default: BASE,
    h1:{
        ...BOLD,
        fontSize: spacing[6]
    },
    h2:{
        ...BASE_BOLD,
        fontSize: spacing[5]
    },
    h3:{
        ...BASE_BOLD,
    },
    small:{
        ...BASE,
        fontSize: spacing[4]-2
    }    
}