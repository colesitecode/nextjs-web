import styled from "styled-components";
import Image from 'next/image'
import Solution_img from '../components/images/solution_img.jpg'

const Solution_Div = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 0;
`

const Solution_Row = styled.div`
  width: 100%;
  display: flex;
`

const Solution_Col = styled.div`
  width: 50%;
  padding: 0 20px 0 20px;
`

const Solution_Col1 = styled.div`
  width: 50%;
`

const Heading = styled.h2`
  font-weight: 800;
  font-size: 18px;
  color: #E21F36;
  text-align: left;
`

const SubHeading = styled.h3`
  font-weight: 900;
  font-size: 40px;
  color: #000219;
  text-align: left;
`

const Support_Div = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  padding: 18px;
  margin-top: 18px;
`

const Support_Title = styled.h2`
  font-weight: 900;
  font-size: 30px;
  color: #000219;
  margin-bottom: 10px;
`

const Support_Description = styled.h3`
  font-weight: normal;
  font-size: 18px;
  color: #000219;
`

export default function Solution() {
    return (
      <>
        <Solution_Div>

          <Solution_Row>
            <Solution_Col style="padding: 0 10px 0 10px">
              <Heading>All-in Solution</Heading>
              <SubHeading>
                IT service management for our client need unique and 
                require a customized set of solutions and service deliverables
              </SubHeading>

              <Support_Div>
                <Support_Title>Helpdesk Support</Support_Title>
                <Support_Description>
                  We can give your company Helpdesk
                  Support for your Software needs through our available Technical Support 
                  Coordinator and our existing Helpdesk Support System.
                </Support_Description>
              </Support_Div>

              <Support_Div>
                <Support_Title>Onsite Tech. Support</Support_Title>
                <Support_Description>
                  We can provide you Technical Person 
                  onsite to be your internal support for particular software OS and 
                  Application need support on an 8hrs, 16hrs and 24hrs by 5 days, 6days 
                  and 7 days coverage as the client require.
                </Support_Description>
              </Support_Div>


            </Solution_Col>

            <Solution_Col1>
              <Image src={Solution_img} alt="Moderntech Solution" />
            </Solution_Col1>
          </Solution_Row>

        </Solution_Div>
      </>
    )
  }
  