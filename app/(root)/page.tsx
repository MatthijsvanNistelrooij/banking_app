import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import React from "react"

const Home = () => {
  const loggedIn = {
    firstName: "MATP",
    email: "email@email.com",
    $id: "1",
    userId: "1",
    dwollaCustomerUrl: "url",
    dwollaCustomerIdL: "url",
    dwollaCustomerId: "",
    lastName: "",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: "",
  }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{ currentBalance: 460.50 }, { currentBalance: 538.50 }]} />
    </section>
  )
}

export default Home
