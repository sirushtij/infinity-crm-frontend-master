import React from "react";
import { Mail, Phone } from "react-feather";
import { Card, CardBody, Col, Media, Row, Table } from "reactstrap";
import logo from "../../assets/img/logo/logo.png";
import * as moment from "moment";
import { amountToWords } from "../../helper/general.helper";

export const ReceiptPrint = ({
  receipt_number,
  name,
  contact,
  address,
  amount,
  payment_date,
  card_number,
  bank_name,
  branch_name,
  createdAt,
}) => {
  return (
    <>
      {!receipt_number ? (
        ""
      ) : (
        <Row>
          <Col className="invoice-wrapper" sm="12">
            <Card className="invoice-page">
              <CardBody>
                <Row>
                  <Col md="6" sm="12" className="pt-1">
                    <Media className="pt-1">
                      <img src={logo} alt="logo" />
                    </Media>
                  </Col>
                  <Col md="6" sm="12" className="text-right">
                    <h1>
                      <strong>Receipt</strong>
                    </h1>
                    <div className="invoice-details mt-2">
                      <h6>RECEIPT NO.</h6>
                      <p>{receipt_number}</p>
                      <h6 className="mt-2">RECEIPT DATE</h6>
                      <p>{moment(createdAt).format("MMMM D, YYYY")}</p>
                    </div>
                  </Col>
                </Row>
                <Row className="pt-2">
                  <Col md="6" sm="12">
                    <h5>Recipient Info</h5>
                    <div className="recipient-info my-2">
                      <p>{name}</p>
                      <p>{address}</p>
                    </div>

                    {contact ? (
                      <div className="recipient-contact pb-2">
                        <p>
                          <Phone size={15} className="mr-50" />
                          {contact}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                  </Col>
                  <Col md="6" sm="12" className="text-right">
                    <h5>R.K. MOTORS </h5>
                    <div className="company-info my-2">
                      <p>T.C.T.J Building , 73M,</p>
                      <p>Thadikombu Road, DINDIGUL</p>
                      <p>624001</p>
                    </div>
                    <div className="company-contact">
                      <p>
                        <Mail size={15} className="mr-50" />
                        rktvsdgl@gmail.com
                      </p>
                      <p>
                        <Phone size={15} className="mr-50" />
                        73977 90001, 73977 90002
                      </p>
                    </div>
                  </Col>
                </Row>
                <div className="invoice-items-table pt-1">
                  <Row>
                    <Col sm="12">
                      <Table responsive borderless>
                        <thead>
                          <tr>
                            <th>Receipent Name</th>
                            <th>{name}</th>
                          </tr>
                          <tr>
                            <th>Cash / Cheques / DD / Credit Card No.</th>
                            <th>{card_number ? card_number : "-"}</th>
                          </tr>
                          <tr>
                            <th>Payment Date</th>
                            <th>
                              {moment(payment_date).format("MMMM D, YYYY")}
                            </th>
                          </tr>
                          <tr>
                            <th>Amount</th>
                            <th>{amount} INR</th>
                          </tr>
                          <tr>
                            <th>Amount In Rupee</th>
                            <th>{amountToWords(amount)}</th>
                          </tr>
                          <tr>
                            <th>Bank Name</th>
                            <th>{bank_name ? bank_name : "-"} </th>
                          </tr>
                          <tr>
                            <th>Branch Name</th>
                            <th>{branch_name ? branch_name : "-"}</th>
                          </tr>
                        </thead>
                      </Table>
                    </Col>
                  </Row>
                </div>
                <Row className="pt-5">
                  <Col sm="6" className="text-left">
                    <strong>Customer Signature</strong>
                    <p>Cheque / DD Subject to realisation.</p>
                  </Col>
                  <Col sm="6" className="text-right">
                    <br />
                    <strong>Authorized Signatory</strong>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};
