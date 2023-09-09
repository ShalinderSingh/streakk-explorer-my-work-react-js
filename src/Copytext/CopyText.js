import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

// import { useState } from "react";
import { toast } from "./Toast";


export default function CopyText({ text }) {
    // const { copied, setCopied } = useState(false);
    return (
        <CopyToClipboard
            text={text}
            style={{ marginLeft: 8, cursor: 'pointer' }}
            onCopy={(e) => {
                toast.success("Copied Successfully");
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16.457" height="16.925" viewBox="0 0 16.457 16.925">
                <g id="Group_20481" data-name="Group 20481" transform="translate(-331.154 -242.238)">
                    <path id="Path_39051" data-name="Path 39051" d="M348.083,255.163c-.025.1-.048.2-.077.3a1.773,1.773,0,0,1-1.6,1.28.605.605,0,1,1-.1-1.207.6.6,0,0,0,.607-.707q0-5.337,0-10.673c0-.483-.217-.707-.685-.708H335.9c-.436,0-.628.178-.684.628a.593.593,0,0,1-.652.574.613.613,0,0,1-.516-.7,1.792,1.792,0,0,1,1.456-1.688.407.407,0,0,0,.072-.028h10.972a.7.7,0,0,0,.088.03,1.635,1.635,0,0,1,1.155.8,4.879,4.879,0,0,1,.291.756Z" transform="translate(-0.472)" fill="#0071FF" />
                    <path id="Path_39052" data-name="Path 39052" d="M343.553,252.8q0,2.52,0,5.041a1.878,1.878,0,0,1-.8,1.658,1.492,1.492,0,0,1-.871.254c-1.066,0-2.132,0-3.2,0h-5.821a1.728,1.728,0,0,1-1.709-1.919q0-5.057,0-10.113a1.771,1.771,0,0,1,1.3-1.831,1.85,1.85,0,0,1,.424-.039q4.48,0,8.96,0a1.666,1.666,0,0,1,1.68,1.453,2.821,2.821,0,0,1,.036.509Q343.556,250.3,343.553,252.8Zm-6.21,5.741h4.479c.457,0,.651-.221.651-.736v-10c0-.534-.193-.751-.669-.751h-8.9c-.059,0-.118,0-.177,0a.563.563,0,0,0-.489.544c-.006.065-.007.131-.007.2v10a1.981,1.981,0,0,0,.01.231.557.557,0,0,0,.445.5,1.626,1.626,0,0,0,.221.011Z" transform="translate(0 -0.589)" fill="#0071FF" />
                </g>
            </svg>
        </CopyToClipboard>
    );
}
