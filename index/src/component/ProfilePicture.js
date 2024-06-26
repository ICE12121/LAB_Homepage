// ProfilePicture.js
import React from 'react';
import '../css/styles.css';

function ProfilePicture() {
  return (
<div class="col-xxl-5">
    <div class="text-center text-xxl-start">
        {/* <div class="badge bg-gradient-primary-to-secondary text-white mb-4"><div class="text-uppercase">Design &middot; Development &middot; Testing</div></div> */}
        <div class="fs-3 fw-bold text-muted">ようこそINA研究室ホームページへ</div>
        <h1 class="display-3 fw-bolder mb-5"><span class="text-gradient d-inline">Information Networking and Applications Laboratory</span></h1>
        
    </div>
    
    <div class="container-img">
    <img class="img-responsive" src="../img/INALAB Mindmap.png" alt="..." />
    </div>

    <div class="container px-5 pb-5"></div>
        <div class="row gx-5 justify-content-center">
            <div class="col-xxl-8">
                <div class="text-center my-5">
                    <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">About INALAB</span></h2>
                    <p class="lead fw-light mb-4">Empowering Tomorrow's Connectivity: From Mesh to Mind.</p>
                    <p class="text-muted">本研究室では、ネットワーク技術とその周辺技術に関する多岐にわたる研究を進めています。無線メッシュネットワークやモバイルアドホックネットワークは、動的な環境下での通信を最適化する技術を中心としています。車々間ネットワークやセンサネットワークは、特定の環境やシチュエーションでのデータ交換と処理に焦点を当てており、セルラーネットワークは大規模な移動体通信の最適化に関わります。また、TorやJXTAオーバーレイネットワークは、プライバシーや分散型アプリケーションの実現を目指しています。さらに、IoTの研究は、さまざまなデバイスが互いに連携する未来のインフラの形成をテーマとし、知的アルゴリズムはこれらのネットワークの動作を最適化するための手法を探求しています。そして、高信頼性P2Pシステムは、分散型のアプローチをとりながらも、信頼性と効率性を両立させる技術の開発を目指しています。</p>
                    
                    <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">研究を行う際に必要なスキル</span></h2>
                    <div class="d-flex justify-content-center">
                    <div class="icon-container">
                        <a href="#!">
                             <img src="../icon/linux-svgrepo-com.svg" alt="Linux" />
                            <div class="icon-label">Linux</div>   {/* Label for the icon */}
                        </a>
                        </div>

                   <div class="icon-container">
                        <a href="#!">
                            <img src="../icon/matlab-svgrepo-com.svg" alt="Matlab" />
                            <div class="icon-label">Matlab</div>  {/* Label for the icon */}
                        </a>
                        </div>
                    <div class="icon-container">
                        <a href="#!">
                            <img src="../icon/programming-svgrepo-com.svg" alt="C/C++" />
                            <div class="icon-label">C/C++</div>  {/* Label for the icon */}
                        </a>
                        </div>
                    <div class="icon-container">
                        <a href="#!">
                            <img src="../icon/latex-svgrepo-com.svg" alt="Latex" />
                            <div class="icon-label">Latex</div>  {/* Label for the icon */}
                        </a>
                        </div>
                        </div>
                        
                </div>
                <div class="text-center my-5">
                <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">配属希望者又は研究室に関心のある方へ</span></h2>
                <p class="text-muted">基本的に配属前には，ネットワーク，OS，プログラミングに関する高度な知識は必要とされていません． これまでに，講義で学んだ程度の知識で問題ないです．配属後のゼミや自主学習などから学んでいきます．
また，INAラボには院生が数人おり，アドバイスを行いますので，効率よく研究にアプローチすることが可能です． 本研究室で行っている研究に関することに興味がある人は是非どうぞ．
                </p>
                </div>
                
            </div>
        </div>
        
   
</div>
 
  );
}

export default ProfilePicture;