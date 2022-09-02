import React, { Component } from 'react';
import logoo from './assets/logoo.png';
import banner from './assets/banner1.jpg'
import {
    MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardText, MDBContainer, MDBCardHeader
} from 'mdbreact';

export default class Home extends Component {

    render() {
        return (
            <>
                <MDBContainer fluid >
                    <MDBRow>
                        <img src={banner} width="100%" height="50%" />
                    </MDBRow>
                </MDBContainer>
                <MDBCard>
                    <MDBCardBody>
                        {/* <MDBCardText className="text-center">
                                <h3 className="card-header text-primary">
                                    <span><img src={logoo} width="50%" /></span><br />
                                    <u>หัวข้อการประกวด</u>
                                </h3>
                            </MDBCardText>
                            <MDBCardText>
                                <MDBRow className="black-text" style={{ fontSize: "16px" }}>
                                    <MDBCol xs="1" lg="1" md="0" sm="0"></MDBCol>
                                    <MDBCol xs="10" lg="10" md="12" sm="12">
                                        1. Modern green building สถาปัตยกรรมร่วมสมัยอนุรักษ์สิ่งแวดล้อม <br />
                                        2. Universal design สิ่งปลูกสร้างเพื่อมวลชน/รองรับทุกความต้องการ<br />
                                        3. Good Way Save life ถนนดีชีวีมีสุข ต้นแบบการจราจรแห่งความปลอดภัย<br />
                                    </MDBCol>
                                    <MDBCol xs="1" lg="1" md="0" sm="0"></MDBCol>
                                </MDBRow>
                            </MDBCardText> */}
                        <MDBCardText className="text-center">
                            <h3 className="card-header text-primary">
                                <u>กติกาการประกวดภาพถ่าย</u>
                            </h3>
                        </MDBCardText>
                        <MDBCardText>
                            <MDBRow className="black-text" style={{ fontSize: "16px" }}>
                                <MDBCol xs="1" lg="1" md="0" sm="0"></MDBCol>
                                <MDBCol xs="10" lg="10" md="12" sm="12">
                                    1. ผู้สมัคร 1 คน มีสิทธิ์เข้าประกวดได้เพียง 1 ประเภทรุ่น <br />
                                    2. ผู้สมัคร 1 คน สามารถส่งภาพเข้าประกวดได้ 1 ภาพเท่านั้น<br />
                                    3. ผู้ถ่ายต้องระบุชื่อภาพ สถานที่ถ่ายภาพ พร้อมคำบรรยายภาพไม่เกิน 255 ตัวอักษร <br />
                                    4. วัตถุ หรือกิจกรรมใดๆ ในภาพ จะต้องเป็นสินทรัพย์ หรือกิจกรรมของ บริษัท ธนารักษ์พัฒนาสินทรัพย์ จำกัด<br />
                                    5. ภาพถ่ายที่ส่งเข้าประกวด ต้องเป็นภาพถ่ายที่ถ่ายด้วยตนเอง ไม่กระทำการใดๆ อันเป็นการละเมิดสิทธิ์ของผู้อื่น และจะต้องเป็นภาพที่บันทึกภายในช่วงที่เปิดรับสมัคร ถึงวันหมดเขตรับสมัคร<br />
                                    6. ภาพถ่ายที่ส่งเข้าประกวด ต้องเป็นไฟล์ภาพสีหรือขาวดำ แนวนอนหรือแนวตั้งก็ได้<br />
                                    7. ภาพถ่ายที่ส่งเข้าประกวดต้องเป็นภาพถ่ายที่ถ่ายโดยใช้กล้อง Digital ในทุกรูปแบบ (DSLR, Mirrorless, Compact, Action Camera, Tablet, Drone และ  Smartphone) หรือกล้องบรรจุฟิล์ม ในกรณีที่ใช้กล้องบรรจุฟิล์มจะต้องนำฟิล์มไปสแกนเป็นไฟล์ภาพดิจิตอลความละเอียดสูง<br />
                                    8. ไฟล์ภาพจากกล้อง DSLR, Mirrorless และ Compact ต้องมีขนาดไม่น้อยกว่า 2,400x4,000 pixels ขนาดไฟล์ต้องไม่น้อยกว่า 1 MB และไม่เกิน 5MB ในรูปแบบไฟล์ .jpg หรือ .jpeg (ต้องรักษาไฟล์ RAW หรือไฟล์ต้นฉบับ ไว้แสดงในกรณีมีการเรียกตรวจสอบ)<br />
                                    9. ไฟล์ภาพจากกล้อง Action Camera, Smartphone หรือ Tablet ควรมีขนาด File ที่ใหญ่และมีคุณภาพ เท่าที่อุปกรณ์นั้น ๆ จะสามารถทำได้ (ขนาดไม่น้อยกว่า 2,400x4,000 pixels ขนาดไฟล์ต้องไม่น้อยกว่า 1 MB และไม่เกิน 5MB) ในรูปแบบไฟล์ .jpg หรือ .jpeg (ต้องรักษาไฟล์ภาพต้นฉบับก่อนการปรับแต่งและภาพ หลังการแต่งแล้ว ในความละเอียดสูงไว้ ไว้แสดงในกรณีมีการเรียกตรวจสอบ)<br />
                                    10. ภาพถ่ายจากอากาศยานไร้คนขับ (Drone) ไม่สามารถส่งเข้าประกวดได้ เนื่องจากเป็นพื้นที่ ที่มีกฎหมายและข้อบังคับของสำนักงานการบินพลเรือนแห่งประเทศไทย <br />
                                    11. ภาพที่ส่งเข้าประกวดต้องไม่มีลายน้ำ เครดิตภาพ ตัวอักษร หรือกราฟิกใด ๆ ลงบนภาพ รวมทั้งห้ามเว้นขอบภาพเป็นสีขาวหรือสีใด ๆ<br />
                                    12. สามารถปรับแต่งภาพถ่ายได้ตามความเหมาะสม ทั้งนี้ขึ้นอยู่กับดุลยพินิจของคณะกรรมการตัดสิน<br />
                                    13. ภาพถ่ายที่ส่งเข้าประกวดต้องไม่เคยได้รับรางวัลจากการประกวดใดๆ มาก่อน ไม่ว่าจะเป็นการประกวดในเวทีสาธารณะ หรือการประกวดภายในของสมาคม ชมรม หรือองค์กรอื่นใด<br />
                                    14. ภาพถ่ายที่ส่งเข้าประกวดต้องไม่มีข้อผูกมัดในเรื่องกรรมสิทธิ์ภาพจากหน่วยงานต่างๆ รวมไปถึงต้องไม่ใช่ภาพที่ส่งขายตาม Stock Photo ทุกแห่ง ทั้งนี้คณะผู้จัดงานจะไม่รับผิดชอบเรื่องการละเมิดลิขสิทธิ์ที่เจ้าของผลงานมีสัญญาผูกพันต่อบุคคลหรือหน่วยงานใดๆ ซึ่งเจ้าของผลงานต้องเป็นผู้รับผิดชอบในกรณีนี้เอง<br />
                                    15. ไฟล์ภาพที่ได้รับรางวัลจะตกเป็นกรรมสิทธิ์ของคณะผู้จัดงาน แต่ลิขสิทธิ์ของภาพทุกภาพยังคงเป็นของผู้ถ่ายภาพอย่างสมบูรณ์ บริษัท ธนารักษ์พัฒนาสินทรัพย์ จำกัด มีสิทธิในการใช้ประโยชน์และเผยแพร่ภาพถ่าย โดยไม่ต้องเสียค่าลิขสิทธิ์แก่เจ้าของภาพ รวมถึงไม่ต้องแจ้งให้เจ้าของภาพทราบล่วงหน้า<br />
                                </MDBCol>
                                <MDBCol xs="1" lg="1" md="0" sm="0"></MDBCol>
                            </MDBRow>
                        </MDBCardText>
                        {/* <MDBCardText className="text-center">
                                <h3 className="card-header text-primary">
                                    <u>รางวัล</u>
                                </h3>
                            </MDBCardText>
                            <MDBCardText>
                                <MDBRow className="black-text" style={{ fontSize: "16px" }}>
                                    <MDBCol xs="1" lg="1" md="0" sm="0"></MDBCol>
                                    <MDBCol xs="10" lg="10" md="12" sm="12">
                                        เงินรางวัลรวมมูลค่า 132,000 บาท
                                    </MDBCol>
                                    <MDBCol xs="1" lg="1" md="0" sm="0"></MDBCol>
                                </MDBRow>
                            </MDBCardText> */}
                        {/* <MDBCardText className="card-header text-center">
                                <a className="btn btn-primary btn-lg" href="#"><u>คลิกเพื่อดาวโหลดเอกสารการสมัครที่นี่</u></a>
                            </MDBCardText> */}
                    </MDBCardBody>
                </MDBCard>
            </>
        )
    }
}
