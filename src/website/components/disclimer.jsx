import React from 'react';

const Disclimer = () => {
  return (
    <section id="disclimer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-xl-5">
            <div className="section-title text-center mb-60">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Disclaimer
              </h1>
            </div>
          </div>
        </div>
        <p className="wow fadeInUp" data-wow-delay=".4s" style={{fontSize: '12px'}}>
                Investments are subject to market risk and we are not supporting
                you to invest without accepting the risk elements.Alternative
                Investments may impose significant fees, including incentive
                fees that are based upon a percentage of the realized and
                unrealized gains, and such fees may offset all or a significant
                portion of such Alternative Investment’s trading profits. An
                individual’s net returns may differ significantly from actual
                returns. Alternative Investments are not required to provide
                periodic pricing or valuation information.past performance does
                not guarantee future results, which may vary. The value of
                investments and the income derived from investments will
                fluctuate and can go down as well as up. A loss of principal may
                occur.interests in an Alternative Investment are highly illiquid
                and generally are not transferable without the consent of the
                sponsor, and applicable securities and tax laws will limit
                transfers.Alternative Investments may themselves invest in
                instruments that may be highly illiquid and extremely difficult
                to value. This also may limit your ability to redeem or transfer
                your investment or delay receipt of redemption or transfer
                proceeds.
              </p>
      </div>
    </section>
  );
};

export default Disclimer;
