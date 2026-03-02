import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppIcon from "./components/WhatsAppButton"; // Imported here

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

/* ================= TRANSLATION SERVICE PAGES ================= */
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

/* ================= ATTESTATION SERVICE PAGES ================= */
import BirthCertificate from "./pages/attestation/BirthCertificate";
import DeathCertificate from "./pages/attestation/DeathCertificate";
import EmbassyAttestation from "./pages/attestation/EmbassyAttestation";
import EquivalencyAttestation from "./pages/attestation/EquivalencyAttestation";
import HomeCountryAttestation from "./pages/attestation/HomeCountryAttestation";
import KHDAAttestation from "./pages/attestation/KHDAAttestation";
import MarriageCertificate from "./pages/attestation/MarriageCertificate";
import MOFAAttestation from "./pages/attestation/MOFAAttestation";
import MOJAttestation from "./pages/attestation/MOJAttestation";
import NotaryAttestation from "./pages/attestation/NotaryAttestation";
import SalaryCertificate from "./pages/attestation/SalaryCertificate";
import TrueCopyAttestation from "./pages/attestation/TrueCopyAttestation";

/* ================= NOTARIZATION SERVICE PAGES ================= */
import AffidavitService from "./pages/notarization/AffidavitService";
import BoardDrafting from "./pages/notarization/BoardDrafting";
import BoardResolution from "./pages/notarization/BoardResolution";
import CompanyLiquidation from "./pages/notarization/CompanyLiquidation";

import HusbandSponsorship from "./pages/notarization/HusbandSponsorship";
import LegalTranslationNotary from "./pages/notarization/LegalTranslationNotary";
import LocalServiceAgent from "./pages/notarization/LocalServiceAgent";
import MinutesOfMeeting from "./pages/notarization/MinutesOfMeeting";
import MOAAmendment from "./pages/notarization/MOAAmendment";
import MOAService from "./pages/notarization/MOAService";
import NOCService from "./pages/notarization/NOCService";

import POARevocation from "./pages/notarization/POARevocation";
import PowerOfAttorneyNotary from "./pages/notarization/PowerOfAttorneyNotary";

import WillTestament from "./pages/notarization/WillTestament";

/* ================= DRAFTING SERVICE PAGES ================= */
import JointVentureAgreement from "./pages/drafting/JointVentureAgreement";
import LegalNotice from "./pages/drafting/LegalNoticeDrafting";
import LoanAgreement from "./pages/drafting/LoanAgreement";
import PartnershipAgreement from "./pages/drafting/PartnershipAgreement";
import RentalTenancy from "./pages/drafting/RentalAgreement";

/* ================= BUSINESS STEPS SERVICE PAGES ================= */
import Freezone from "./pages/businessSteps/FreezoneSetup";
import Mainland from "./pages/businessSteps/MainlandSetup";
import Offshore from "./pages/businessSteps/OffshoreSetup";
import CorporateBank from "./pages/businessSteps/BankAccountOpening";

/* ================= EMIRATI PENSION SERVICE PAGES ================= */
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
            {/* ========= MAIN ROUTES ========= */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/translation" element={<Translation />} />
            <Route path="/attestation" element={<Attestation />} />
            <Route path="/notarization" element={<Notarization />} />
            <Route path="/drafting" element={<Drafting />} />
            <Route path="/business-steps" element={<BusinessSteps />} />
            <Route path="/emirati-pension" element={<EmiratiPension />} />

            {/* ========= TRANSLATION ========= */}
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

            {/* ========= ATTESTATION ========= */}
            <Route path="/attestation/birth-certificate" element={<BirthCertificate />} />
            <Route path="/attestation/death-certificate" element={<DeathCertificate />} />
            <Route path="/attestation/embassy" element={<EmbassyAttestation />} />
            <Route path="/attestation/equivalency" element={<EquivalencyAttestation />} />
            <Route path="/attestation/home-country" element={<HomeCountryAttestation />} />
            <Route path="/attestation/khda" element={<KHDAAttestation />} />
            <Route path="/attestation/marriage-certificate" element={<MarriageCertificate />} />
            <Route path="/attestation/mofa" element={<MOFAAttestation />} />
            <Route path="/attestation/moj" element={<MOJAttestation />} />
            <Route path="/attestation/notary" element={<NotaryAttestation />} />
            <Route path="/attestation/salary-certificate" element={<SalaryCertificate />} />
            <Route path="/attestation/true-copy" element={<TrueCopyAttestation />} />

            {/* ========= NOTARIZATION ========= */}
            <Route path="/notarization/affidavit" element={<AffidavitService />} />
            <Route path="/notarization/board-drafting" element={<BoardDrafting />} />
            <Route path="/notarization/board-resolution" element={<BoardResolution />} />
            <Route path="/notarization/company-liquidation" element={<CompanyLiquidation />} />
            <Route path="/notarization/husband-sponsorship" element={<HusbandSponsorship />} />
            <Route path="/notarization/legal-translation" element={<LegalTranslationNotary />} />
            <Route path="/notarization/local-service-agent" element={<LocalServiceAgent />} />
            <Route path="/notarization/minutes-of-meeting" element={<MinutesOfMeeting />} />
            <Route path="/notarization/moa-amendment" element={<MOAAmendment />} />
            <Route path="/notarization/moa-service" element={<MOAService />} />
            <Route path="/notarization/noc" element={<NOCService />} />
            <Route path="/notarization/poa-revocation" element={<POARevocation />} />
            <Route path="/notarization/power-of-attorney" element={<PowerOfAttorneyNotary />} />
            <Route path="/notarization/will-testament" element={<WillTestament />} />

            {/* ========= DRAFTING ========= */}
            <Route path="/drafting/joint-venture-agreement" element={<JointVentureAgreement />} />
            <Route path="/drafting/legal-notice" element={<LegalNotice />} />
            <Route path="/drafting/loan-agreement" element={<LoanAgreement />} />
            <Route path="/drafting/partnership-agreement" element={<PartnershipAgreement />} />
            <Route path="/drafting/rental-tenancy" element={<RentalTenancy />} />

            {/* ========= BUSINESS STEPS ========= */}
            <Route path="/business-steps/freezone" element={<Freezone />} />
            <Route path="/business-steps/mainland" element={<Mainland />} />
            <Route path="/business-steps/offshore" element={<Offshore />} />
            <Route path="/business-steps/corporate-bank" element={<CorporateBank />} />

            {/* ========= EMIRATI PENSION ========= */}
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

        <WhatsAppIcon /> {/* WhatsApp icon is here, fixed on all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}