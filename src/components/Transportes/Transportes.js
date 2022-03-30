import ChooseTransport from "./ChooseTransport/ChooseTransport";
import SectionLocation from "./Section_Location/SectionLocation";
import SectionTransportVoucher from "./TransportVoucher/SectionTransportVoucher";
import VoucherCrud from "./CRUD_Voucher/VoucherCrud";
import { GetTransportes } from "./transportUtils";

export default function Transportes() {
  const url = "http://localhost:3001/transportes";

  const [pageEndPointTransportes, doneTransportes] = GetTransportes(url);

  return (
    <>
      <SectionLocation
        doneTransportes={doneTransportes}
        pageEndPointTransportes={pageEndPointTransportes}
      />
      <SectionTransportVoucher />
      <ChooseTransport
        doneTransportes={doneTransportes}
        pageEndPointTransportes={pageEndPointTransportes}
      />
      <VoucherCrud />
    </>
  );
}
