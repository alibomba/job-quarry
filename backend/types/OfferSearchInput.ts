import Level from "./Level"
import ContractType from "./ContractType"
import WorkMode from "./WorkMode"

type OfferSearchInput = {
    phrase?: string,
    city?: string,
    level?: keyof typeof Level,
    contractType?: keyof typeof ContractType,
    mode?: keyof typeof WorkMode,
    technologies?: string[],
    salaryFrom?: number,
    salaryTo?: number
}

export default OfferSearchInput