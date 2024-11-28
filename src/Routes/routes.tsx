import { Routes, Route } from 'react-router-dom'
import {
  Contact,
  Home,
  UltraDelivery,
  UltraHomeCare,
  UltrassomAbdominal,
  UltrassomDermatologico,
  UltrassomDopler,
  UltrassomGeral,
  UltrassomMamas,
  UltrassomObstetricaRenal,
  UltrassomPelvicaViaAbdominal,
  UltrassomRenal,
  UltrassomTireoide,
  UltrassomTransvaginal,
} from '../Pages'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contatos" element={<Contact />} />
      <Route path="/ultra-delivery" element={<UltraDelivery />} />
      <Route path="/ultrassom-geral" element={<UltrassomGeral />} />
      <Route
        path="/ultrassom-dermatologico"
        element={<UltrassomDermatologico />}
      />
      <Route path="/ultrassom-de-mamas" element={<UltrassomMamas />} />
      <Route path="/ultrassom-renal" element={<UltrassomRenal />} />
      <Route
        path="/ultrassom-obstetrica-renal"
        element={<UltrassomObstetricaRenal />}
      />
      <Route
        path="/ultrassom-pelvica-via-abdominal"
        element={<UltrassomPelvicaViaAbdominal />}
      />

      <Route
        path="/ultrassom-transvaginal"
        element={<UltrassomTransvaginal />}
      />

      <Route path="/ultrassom-de-tireroide" element={<UltrassomTireoide />} />
      <Route path="/ultrassom-abdominal" element={<UltrassomAbdominal />} />
      <Route path="/ultrassom-dopler" element={<UltrassomDopler />} />
      <Route path="/ultra-home-care" element={<UltraHomeCare />} />
    </Routes>
  )
}
