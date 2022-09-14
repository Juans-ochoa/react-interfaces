import React, { useEffect, useState } from "react";
import "./styles.modules.css";

const listDomainsEmails = [
  "google.com",
  "google.co.com",
  "unisangil.edu.co",
  "yahoo.com",
  "outlook.com",
];

const InputAutoPredictive = () => {
  const [isActiveMask, setIsActiveMask] = useState(false);
  const [email, setEmail] = useState("");
  const [mask, setMask] = useState("");

  const handleChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const filterOptions = (domain) => {
    domain = domain.toLowerCase();
    const regExp = `^${domain}+`;
    const domainsFind = listDomainsEmails.filter((domainEmail) =>
      RegExp(regExp).test(domainEmail)
    );
    if (domainsFind.length === 0) {
      setIsActiveMask(false);
      setMask("");
      return;
    }

    setMask(`${email}${domainsFind[0].substring(domain.length)}`);
  };

  useEffect(() => {
    const index = email.search("@");
    if (index === -1) {
      setMask("");
      setIsActiveMask(false);
      return;
    }

    if (email.length === index + 1) {
      setMask(email + listDomainsEmails[0]);
    } else {
      const domain = email.substring(index + 1);
      filterOptions(domain);
    }
    setIsActiveMask(true);
  }, [email]);

  return (
    <div className="content__input">
      <label htmlFor="email">Email</label>
      <div className="mask__container">
        {isActiveMask && <span className="mask__input">{mask}</span>}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </div>
    </div>
  );
};

export default InputAutoPredictive;
