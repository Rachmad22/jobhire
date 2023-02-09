import React from "react";

export default function Sosmed({item}) {

    return (
        <>
            <p><img src="/images/mail.svg" alt="mail" className="me-3" />{item.email}</p>
            <p><img src="/images/instagram.svg" alt="ig" className="me-3" />@Louist91</p>
            <p><img src="/images/github.svg" alt="github" className="me-3" />@Louistommo</p>
            <p><img src="/images/gitlab.svg" alt="gitlab" className="me-3" />@Louistommo91</p>
        </>
    )
}