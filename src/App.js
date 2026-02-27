import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

/* ================= MAIN PAGES ================= */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Translation from "./pages/translation/Translation";
import Attestation from "./pages/attestation/Attestation";
import Notarization from "./pages/notarization/Notarization";
import Drafting from "./pages/drafting/Drafting";
import BusinessSteps from "./pages/businessSteps/BusinessSteps";
import EmiratiPension from "./pages/emiratiPension/EmiratiPension";

/* ================= TRANSLATION ================= */
import NormalTranslation from "./pages/translation/NormalTranslation";
import SmartWordTranslation from "./pages/translation/SmartWordTranslation";
import MedicalTranslation from "./pages/translation/MedicalTranslation";
import LegalTranslation from "./pages/translation/LegalTranslation";
import PowerOfAttorney from "./pages/translation/PowerOfAttorney";
import TrademarkTranslation from "./pages/translation/TrademarkRegistration";
import CertifiedTranslation from "./pages/translation/CertifiedTranslation";
import CertificateTranslation from "./pages/translation/CertificateTranslation";
import MarketingTranslation from "./pages/translation/MarketingTranslation";
import SubtitlingTranslation from "./pages/translation/SubtitlingTranslation";
import TechnicalTranslation from "./pages/translation/TechnicalTranslation";
import BusinessTranslation from "./pages/translation/BusinessTranslation";
import AcademicTranslation from "./pages/translation/AcademicTranslation";
import VideoVoiceTranslation from "./pages/translation/VideoVoiceTranslation";
import ScientificTranslation from "./pages/translation/ScientificTranslation";
import TopCertifiedTranslation from "./pages/translation/TopCertifiedTranslation";
import DigitalContent from "./pages/translation/DigitalContentTranslation";
import SoftwareLocalization from "./pages/translation/SoftwareLocalization";
import WebsiteLocalization from "./pages/translation/WebsiteLocalization";

/* ================= DRAFTING ================= */
import JointVentureAgreement from "./pages/drafting/JointVentureAgreement";
import LegalNotice from "./pages/drafting/LegalNoticeDrafting";
import LoanAgreement from "./pages/drafting/LoanAgreement";
import PartnershipAgreement from "./pages/drafting/PartnershipAgreement";
import RentalTenancy from "./pages/drafting/RentalAgreement";

/* ================= BUSINESS STEPS ================= */
import Freezone from "./pages/businessSteps/FreezoneSetup";
import Mainland from "./pages/businessSteps/MainlandSetup";
import Offshore from "./pages/businessSteps/OffshoreSetup";
import CorporateBank from "./pages/businessSteps/BankAccountOpening";

/* ================= EMIRATI PENSION (FIXED IMPORTS) ================= */
import GPSSARegistration from "./pages/emiratiPension/GPSSARegistration";
import EmployerCancellation from "./pages/emiratiPension/EmployerCancellation";
import ContributionProforma from "./pages/emiratiPension/ContributionProforma";
import MonthlyContribution from "./pages/emiratiPension/MonthlyContribution";
import RegisterEmployee from "./pages/emiratiPension/RegisterEmployee";
import PensionCertificate from "./pages/emiratiPension/PensionCertificate";
import EndOfService from "./pages/emiratiPension/EndOfService";
import UpdateEmployeeData from "./pages/emiratiPension/UpdateEmployeeData";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>

            {/* MAIN */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/translation" element={<Translation />} />
            <Route path="/attestation" element={<Attestation />} />
            <Route path="/notarization" element={<Notarization />} />
            <Route path="/drafting" element={<Drafting />} />
            <Route path="/business-steps" element={<BusinessSteps />} />
            <Route path="/emirati-pension" element={<EmiratiPension />} />

            {/* TRANSLATION */}
            <Route path="/translation/normal-translation" element={<NormalTranslation />} />
            <Route path="/translation/smart-word-translation" element={<SmartWordTranslation />} />
            <Route path="/translation/medical-translation" element={<MedicalTranslation />} />
            <Route path="/translation/legal-translation" element={<LegalTranslation />} />
            <Route path="/translation/power-of-attorney" element={<PowerOfAttorney />} />
            <Route path="/translation/trademark-translation" element={<TrademarkTranslation />} />
            <Route path="/translation/certified-translation" element={<CertifiedTranslation />} />
            <Route path="/translation/certificate-translation" element={<CertificateTranslation />} />
            <Route path="/translation/marketing-translation" element={<MarketingTranslation />} />
            <Route path="/translation/subtitling-translation" element={<SubtitlingTranslation />} />
            <Route path="/translation/technical-translation" element={<TechnicalTranslation />} />
            <Route path="/translation/business-translation" element={<BusinessTranslation />} />
            <Route path="/translation/academic-translation" element={<AcademicTranslation />} />
            <Route path="/translation/video-voice-translation" element={<VideoVoiceTranslation />} />
            <Route path="/translation/scientific-translation" element={<ScientificTranslation />} />
            <Route path="/translation/top-certified-translation" element={<TopCertifiedTranslation />} />
            <Route path="/translation/digital-content" element={<DigitalContent />} />
            <Route path="/translation/software-localization" element={<SoftwareLocalization />} />
            <Route path="/translation/website-localization" element={<WebsiteLocalization />} />

            {/* DRAFTING */}
            <Route path="/drafting/joint-venture-agreement" element={<JointVentureAgreement />} />
            <Route path="/drafting/legal-notice" element={<LegalNotice />} />
            <Route path="/drafting/loan-agreement" element={<LoanAgreement />} />
            <Route path="/drafting/partnership-agreement" element={<PartnershipAgreement />} />
            <Route path="/drafting/rental-tenancy" element={<RentalTenancy />} />

            {/* BUSINESS */}
            <Route path="/business-steps/freezone" element={<Freezone />} />
            <Route path="/business-steps/mainland" element={<Mainland />} />
            <Route path="/business-steps/offshore" element={<Offshore />} />
            <Route path="/business-steps/corporate-bank" element={<CorporateBank />} />

            {/* EMIRATI PENSION */}
            <Route path="/emirati-pension/registration" element={<GPSSARegistration />} />
            <Route path="/emirati-pension/employer-cancellation" element={<EmployerCancellation />} />
            <Route path="/emirati-pension/contribution-proforma" element={<ContributionProforma />} />
            <Route path="/emirati-pension/monthly-contribution" element={<MonthlyContribution />} />
            <Route path="/emirati-pension/register-employee" element={<RegisterEmployee />} />
            <Route path="/emirati-pension/pension-certificate" element={<PensionCertificate />} />
            <Route path="/emirati-pension/end-of-service" element={<EndOfService />} />
            <Route path="/emirati-pension/update-employee" element={<UpdateEmployeeData />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}