import { getAddress } from "../constant";
import CopyText from "../Copytext/CopyText";
function TransactionOverview({ params, fromWhere }) {
    return (
        <div className="blockNoOuter">
            <div className="headerSec">
                <h4 className="blockTxt">Account Address</h4>
                <p className="keyText valueTxt" style={{
                    fontSize: "18px"
                }}>
                    {params.address ? getAddress(params.address) : ''}
                    <CopyText text={params.address} />
                </p>
            </div>

        </div>
    );
}

export default TransactionOverview;
