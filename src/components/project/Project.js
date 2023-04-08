import * as S from "../../styles/theme";
import "../../styles/skeleton.css";
import HIGO from "../../images/HIGO.png";
import OVC from "../../images/OVC.png";

function Project() {
    return (
        <S.content_wrap>
            <S.PJ>
                <div className="Wrapper">
                    <img
                        src={HIGO}
                        width={"300px"}
                        height={"150px"}
                        alt="higo"
                    />
                    <table className="table">
                        <tr>
                            <th>Project 명</th>
                            <td>HIDDEN GOSU</td>
                        </tr>
                        <tr>
                            <th>Project 소개</th>
                            <td>
                                히든고수 전문가 매칭 서비스 플랫폼.
                                <br />
                                고객과 고수로 나뉘어진 여러 카테고리별로 견적
                                요청서와 견적서를 통해 자신의 능력을 사고, 파는
                                웹사이트
                            </td>
                        </tr>
                        <tr>
                            <th>기술스택</th>
                            <td>
                                JAVA, Spring Framework, <br />
                                MYSQL, Oracle, JQuery,
                                <br />
                                JavaScript, Tomcat
                            </td>
                        </tr>
                        <tr>
                            <th>Git</th>
                            <td>
                                <a href="https://github.com/Bjin7916/higo">
                                    https://github.com/Bjin7916/higo
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="Wrapper">
                    <img
                        src={OVC}
                        width={"300px"}
                        height={"150px"}
                        alt="overwatch"
                    />
                    <table className="table">
                        <tr>
                            <th>Project 명</th>
                            <td>OverWatch Community</td>
                        </tr>
                        <tr>
                            <th>Project 소개</th>
                            <td>
                                오버워치라는 온라인 게임의 커뮤니티 사이트를
                                HTML과 JavaScript, CSS만을 사용하여 만든
                                토이프로젝트
                            </td>
                        </tr>
                        <tr>
                            <th>기술스택</th>
                            <td>HTML, JavaScript</td>
                        </tr>
                        <tr>
                            <th>Git</th>
                            <td>
                                <a href="https://bjin7916.github.io/ovc-project/">
                                    https://bjin7916.github.io/ovc-project/
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </S.PJ>
        </S.content_wrap>
    );
}
export default Project;
