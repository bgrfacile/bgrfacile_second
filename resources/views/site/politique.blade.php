<x-site-layout>
    <x-slot name="header"></x-slot>

    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">

        <style type="text/css">
            @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 400;
                src: url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Regular.eot);
                src: local('Lato Regular'), local('Lato-Regular'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Regular.woff2) format('woff2'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Regular.woff) format('woff'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Regular.svg#Lato) format('svg'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Regular.ttf) format('truetype'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Regular.eot?#iefix) format('embedded-opentype');
                font-display: block;
            }

            @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 700;
                src: url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Bold.eot);
                src: local('Lato Bold'), local('Lato-Bold'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Bold.woff2) format('woff2'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Bold.woff) format('woff'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Bold.ttf) format('truetype'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Bold.eot?#iefix) format('embedded-opentype');
                font-display: block;
            }

            @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 900;
                src: url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Black.eot);
                src: local('Lato Black'), local('Lato-Black'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Black.woff2) format('woff2'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Black.woff) format('woff'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Black.ttf) format('truetype'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Black.eot?#iefix) format('embedded-opentype');
                font-display: block;
            }

            @font-face {
                font-family: 'Lato';
                font-style: italic;
                font-weight: 400;
                src: url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Italic.eot);
                src: local('Lato Italic'), local('Lato-Italic'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Italic.woff2) format('woff2'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Italic.woff) format('woff'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Italic.ttf) format('truetype'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Italic.eot?#iefix) format('embedded-opentype');
                font-display: block;
            }

            @font-face {
                font-family: 'Lato';
                font-style: italic;
                font-weight: 700;
                src: url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Bold-Italic.eot);
                src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Bold-Italic.woff2) format('woff2'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Bold-Italic.woff) format('woff'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Bold-Italic.ttf) format('truetype'), url(https://www.documentslegaux.fr/common/fonts/Lato/Lato-Bold-Italic.eot?#iefix) format('embedded-opentype');
                font-display: block;
            }

            @font-face {
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 300;
                src: url(/common/fonts/Open-Sans/opensans-light.eot);
                src: local('Open-Sans Light'), local('OpenSans-Light'), url(/common/fonts/Open-Sans/opensans-light.woff2) format('woff2'), url(/common/fonts/Open-Sans/opensans-light.woff) format('woff'), url(/common/fonts/Open-Sans/opensans-light.ttf) format('truetype'), url(/common/fonts/Open-Sans/opensans-light.eot?#iefix) format('embedded-opentype'), url(/common/fonts/Open-Sans/opensans-light.svg#opensans-light) format('svg');
                font-display: swap;
            }

            @font-face {
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 400;
                src: url(/common/fonts/Open-Sans/opensans-regular.eot);
                src: local('Open-Sans Regular'), local('OpenSans-Regular'), url(/common/fonts/Open-Sans/opensans-regular.woff2) format('woff2'), url(/common/fonts/Open-Sans/opensans-regular.woff) format('woff'), url(/common/fonts/Open-Sans/opensans-regular.ttf) format('truetype'), url(/common/fonts/Open-Sans/opensans-regular.eot?#iefix) format('embedded-opentype'), url(/common/fonts/Open-Sans/opensans-regular.svg#opensans-regular) format('svg');
                font-display: swap;
            }

            @font-face {
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 600;
                src: url(/common/fonts/Open-Sans/opensans-semibold.eot);
                src: local('Open-Sans SemiBold'), local('OpenSans-SemiBold'), url(/common/fonts/Open-Sans/opensans-semibold.woff2) format('woff2'), url(/common/fonts/Open-Sans/opensans-semibold.woff) format('woff'), url(/common/fonts/Open-Sans/opensans-semibold.ttf) format('truetype'), url(/common/fonts/Open-Sans/opensans-semibold.eot?#iefix) format('embedded-opentype'), url(/common/fonts/Open-Sans/opensans-semibold.svg#opensans-semibold) format('svg');
                font-display: swap;
            }

            @font-face {
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                src: url(/common/fonts/Open-Sans/opensans-bold.eot);
                src: local('Open-Sans Bold'), local('OpenSans-Bold'), url(/common/fonts/Open-Sans/opensans-bold.woff2) format('woff2'), url(/common/fonts/Open-Sans/opensans-bold.woff) format('woff'), url(/common/fonts/Open-Sans/opensans-bold.ttf) format('truetype'), url(/common/fonts/Open-Sans/opensans-bold.eot?#iefix) format('embedded-opentype'), url(/common/fonts/Open-Sans/opensans-bold.svg#opensans-bold) format('svg');
                font-display: swap;
            }

            @font-face {
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 800;
                src: url(/common/fonts/Open-Sans/opensans-extrabold.eot);
                src: local('Open-Sans Extra Bold'), local('OpenSans-ExtraBold'), url(/common/fonts/Open-Sans/opensans-extrabold.woff2) format('woff2'), url(/common/fonts/Open-Sans/opensans-extrabold.woff) format('woff'), url(/common/fonts/Open-Sans/opensans-extrabold.ttf) format('truetype'), url(/common/fonts/Open-Sans/opensans-extrabold.eot?#iefix) format('embedded-opentype'), url(/common/fonts/Open-Sans/opensans-extrabold.svg#opensans-extrabold) format('svg');
                font-display: swap;
            }

            @font-face {
                font-family: 'Open Sans';
                font-style: italic;
                font-weight: 300;
                src: url(/common/fonts/Open-Sans/opensans-lightitalic.eot);
                src: local('Open-Sans Light Italic'), local('OpenSansLight-Italic'), url(/common/fonts/Open-Sans/opensans-lightitalic.woff2) format('woff2'), url(/common/fonts/Open-Sans/opensans-lightitalic.woff) format('woff'), url(/common/fonts/Open-Sans/opensans-lightitalic.ttf) format('truetype'), url(/common/fonts/Open-Sans/opensans-lightitalic.eot?#iefix) format('embedded-opentype'), url(/common/fonts/Open-Sans/opensans-lightitalic.svg#opensans-lightitalic) format('svg');
                font-display: swap;
            }

            @font-face {
                font-family: 'Open Sans';
                font-style: italic;
                font-weight: 400;
                src: url(/common/fonts/Open-Sans/opensans-italic.eot);
                src: local('Open-Sans Italic'), local('OpenSans-Italic'), url(/common/fonts/Open-Sans/opensans-italic.woff2) format('woff2'), url(/common/fonts/Open-Sans/opensans-italic.woff) format('woff'), url(/common/fonts/Open-Sans/opensans-italic.ttf) format('truetype'), url(/common/fonts/Open-Sans/opensans-italic.eot?#iefix) format('embedded-opentype'), url(/common/fonts/Open-Sans/opensans-italic.svg#opensans-italic) format('svg');
                font-display: swap;
            }

            @font-face {
                font-family: 'Open Sans';
                font-style: italic;
                font-weight: 600;
                src: url(/common/fonts/Open-Sans/opensans-semibolditalic.eot);
                src: local('Open-Sans SemiBold Italic'), local('OpenSansSemiBold-Italic'), url(/common/fonts/Open-Sans/opensans-semibolditalic.woff2) format('woff2'), url(/common/fonts/Open-Sans/opensans-semibolditalic.woff) format('woff'), url(/common/fonts/Open-Sans/opensans-semibolditalic.ttf) format('truetype'), url(/common/fonts/Open-Sans/opensans-semibolditalic.eot?#iefix) format('embedded-opentype'), url(/common/fonts/Open-Sans/opensans-semibolditalic.svg#opensans-semibolditalic) format('svg');
                font-display: swap;
            }

            @font-face {
                font-family: 'Open Sans';
                font-style: italic;
                font-weight: 700;
                src: url(/common/fonts/Open-Sans/opensans-bolditalic.eot);
                src: local('Open-Sans Bold Italic'), local('OpenSansBold-Italic'), url(/common/fonts/Open-Sans/opensans-bolditalic.woff2) format('woff2'), url(/common/fonts/Open-Sans/opensans-bolditalic.woff) format('woff'), url(/common/fonts/Open-Sans/opensans-bolditalic.ttf) format('truetype'), url(/common/fonts/Open-Sans/opensans-bolditalic.eot?#iefix) format('embedded-opentype'), url(/common/fonts/Open-Sans/opensans-bolditalic.svg#opensans-bolditalic) format('svg');
                font-display: swap;
            }

            @font-face {
                font-family: 'Open Sans';
                font-style: italic;
                font-weight: 800;
                src: url(/common/fonts/Open-Sans/opensans-extrabolditalic.eot);
                src: local('Open-Sans ExtraBold Italic'), local('OpenSansExtraBold-Italic'), url(/common/fonts/Open-Sans/opensans-extrabolditalic.woff2) format('woff2'), url(/common/fonts/Open-Sans/opensans-extrabolditalic.woff) format('woff'), url(/common/fonts/Open-Sans/opensans-extrabolditalic.ttf) format('truetype'), url(/common/fonts/Open-Sans/opensans-extrabolditalic.eot?#iefix) format('embedded-opentype'), url(/common/fonts/Open-Sans/opensans-extrabolditalic.svg#opensans-extrabolditalic) format('svg');
                font-display: swap;
            }

            @page {
                margin: 60px 35px 35px
            }

            @page :first {
                margin-top: 35px
            }

            .template_test {
                font-family: "Lato";
                font-size: 10pt
            }

            .template_test .pageBreak {
                page-break-before: always
            }

            .template_test .blankLine {
                display: block;
                border-bottom: 1px solid #000
            }

            .template_test .keepTogether {
                page-break-inside: avoid
            }

            .template_test h1 {
                font-size: 22pt;
                text-align: center;
                padding: 15px 0;
                margin: 15px 0;
                border-bottom: 2px solid #000;
                font-weight: 900
            }

            .template_test h2 {
                text-align: center;
                font-size: 14pt;
                text-transform: uppercase;
                font-weight: 700;
                overflow: hidden;
                margin: 20px 0
            }

            .template_test h2::before,
            .template_test h2::after {
                background-color: #000;
                content: "";
                display: inline-block;
                height: 1px;
                position: relative;
                vertical-align: middle;
                width: 50%
            }

            .template_test h2::before {
                right: 10px;
                margin-left: -50%
            }

            .template_test h2::after {
                left: 10px;
                margin-right: -50%
            }

            .template_test .contactInfo {
                text-align: center;
                margin: 15px 0
            }

            .template_test .contactInfo span::before {
                content: " | ";
                padding: 0 5px
            }

            .template_test .contactInfo span:first-child::before {
                content: "";
                padding: 0
            }

            .template_test p {
                margin: 20px 0
            }

            .template_test .infoHeading {
                margin: 20px 0 10px;
                position: relative
            }

            .template_test .infoHeading .mainTitle,
            .template_test .infoHeading .mainInfo {
                font-weight: 900;
                font-size: 12pt;
                display: block;
                max-width: 50%
            }

            .template_test .infoHeading .subTitle,
            .template_test .infoHeading .subInfo {
                font-weight: 700;
                font-size: 11pt;
                display: block;
                max-width: 50%
            }

            .template_test .infoHeading .mainInfo {
                position: absolute;
                top: 0;
                right: 0
            }

            .template_test .infoHeading .subInfo {
                position: absolute;
                bottom: 0;
                right: 0
            }

            .template_test .infoHeading.education .subInfo {
                font-weight: normal;
                font-style: italic;
                position: static;
                display: block;
                font-size: 10pt;
                max-width: 100%
            }

            .template_test .infoHeading.award .subInfo,
            .template_test .infoHeading.volunteer .subInfo {
                font-weight: normal;
                position: static;
                display: block;
                font-size: 10pt;
                max-width: 100%
            }

            .template_test ul {
                margin: 0;
                list-style-type: none
            }

            .template_test ul li::before {
                content: "â€¢";
                position: absolute;
                left: 20px
            }

            .template_test li {
                margin: 10px 0;
                padding-left: 33px;
                position: relative;
                box-sizing: border-box
            }

            .template_test .columns {
                font-size: 0
            }

            .template_test .columns li {
                display: inline-block;
                width: 50%;
                font-size: 10pt;
                margin: 5px 0;
                vertical-align: top
            }

            .template_test .workSample {
                margin-left: 20px
            }

            .ua-mobile .template_test h2::before,
            .ua-mobile .template_test h2::after {
                height: 2px
            }

            .ua-android.ua-webkit .template_test .columns {
                font-size: 10pt
            }

            .ua-android.ua-webkit .template_test .columns li {
                width: 49%
            }

            body,
            html {
                background: #FFF;
            }

            noscript,
            #navigation,
            #banner,
            #footer,
            #intro,
            #outtro,
            .ImportantInfoDialog,
            .headerSimplePreview,
            .sectionMenuTop,
            .selLicense,
            .previewHead,
            iframe,
            iframe *,
            .noMobile,
            .woahbar,
            .contractFootControls,
            .previewFormatWarning {
                display: none;
            }

            #upsell,
            #popupContainer,
            #popupMask,
            .contentBreak,
            .contentBreakEnd {
                display: none !important;
            }

            #popupContainer,
            #popupMask {
                visibility: hidden;
            }

            #wrapper,
            #content {
                background: none;
                position: relative;
                display: block;
                width: auto;
            }

            #outputPage {
                display: block;
                padding: 3px;
                background: #FFF;
                color: #000;
                position: relative;
                mso-style-parent: "";
                margin: 0;
                margin-bottom: 0.0001pt;
                mso-pagination: widow-orphan;
                tab-stops: -.5in;
                font-size: 12pt;
                font-family: "Times New Roman", serif;
                mso-fareast-font-family: "Times New Roman";
                line-height: 18pt;
            }

            #outputPage {
                width: 100%;
                background: none;
            }

            #outputPage table {
                border-collapse: collapse
            }

            #outputPage ol {
                list-style: decimal;
            }

            #outputPage ol ol {
                list-style: lower-alpha;
            }

            #outputPage ol ol ol {
                list-style: lower-roman;
            }

            #outputPage ol ol ol ol {
                list-style: decimal;
                list-style-position: inherit;
            }

            #outputPage br.pageBreak {
                page-break-before: always
            }

            @media screen {
                #outputPage br.pageBreak {
                    display: none
                }
            }

            #outputPage .outputVersion2 p,
            #outputPage .outputVersion2 ol,
            #outputPage .outputVersion2 ul,
            #outputPage .outputVersion2 table {
                margin-bottom: 0
            }

            #outputPage .outputVersion2 ol,
            #outputPage .outputVersion2 ul {
                margin-left: 0;
                padding-left: 0
            }

            #outputPage .outputVersion2 li>div {
                display: table;
                *display: inline;
                *margin-left: -17px
            }

            #outputPage .format-doc .outputVersion2 li,
            #outputPage .format-rtf .outputVersion2 li,
            #outputPage .format-docx .outputVersion2 li,
            #outputPage .format-pdf .outputVersion2 li {
                margin-left: 18pt
            }

            #outputPage .outputVersion2 {
                padding-top: 43pt
            }

            .LDCopyright {
                font-size: 67%;
            }

            .LDCellCenter {
                text-align: center;
            }

            .LDCellPadLeft {
                padding-left: 100px;
            }

            .LDCellRight {
                text-align: right;
            }

            .LDResRentalBox {
                width: 100%;
            }

            .LDQuitclaimHead {
                height: 3in;
            }

            .LDWarrantyHead {
                height: 3in;
            }

            .LDQuitclaimHeadCA {
                height: 1in;
            }

            .LDWarrantyHeadCA {
                height: 1in;
            }

            .LDWarrantyHeadMO {
                height: 2in;
            }

            .LDQuitclaimHeadMO {
                height: 2in;
            }

            .SubHeadStyle {
                font-weight: bold;
                text-decoration: underline;
            }

            .SectionTitle {
                font-weight: bold;
                text-decoration: underline;
                margin: 1em 0;
            }

            .invoiceBorder {
                border: 1px solid #000;
            }

            .invoiceGreyBG {
                background-color: #ccc;
            }

            .LDBold {
                font-weight: bold;
            }

            .LDBackgroundOL {
                list-style-type: upper-alpha;
            }

            #bottomTabs,
            #topTabs,
            #introContent,
            #loadingIndicator,
            #questionpage,
            #documentControls,
            #questionpage {
                display: none
            }

            #productContent,
            #documentContent {
                width: 100%;
                border: 0;
                margin: 0
            }

            #outputPage li {
                margin-bottom: 1em;
            }

            #outputPage li li {
                margin-bottom: 1em;
            }

            #outputPage li ol {
                margin-top: 1em;
            }

            #outputPage li ol li {
                margin-bottom: 1em;
            }

            #outputPage li.lh,
            #outputPage li.lhl {
                margin-bottom: 0;
                list-style: none;
            }

            .FirstMajorListHeading {
                font-weight: bold;
                margin-bottom: 1.6em;
            }

            .FirstListHeading {
                font-weight: bold;
                text-decoration: underline;
                font-size: 12pt;
                margin: 1.4em 0 0.2em 2em;
                /* 2em should be set to left margin of lists */
            }

            .ListHeading {
                font-weight: bold;
                text-decoration: underline;
            }

            div.header,
            div.firstHeader,
            div.footer,
            div.firstFooter {
                display: none;
            }

            .blankLine {
                display: block;
                border-bottom: solid 1px #000;
            }


            @media only screen and (max-device-width: 1024px) {
                body {
                    -webkit-text-size-adjust: 100%;
                    -moz-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }
            }

        </style>

        <div>
            <div id="outputPage" class="ContractText">
                <div class="format-html">
                    <div data-exp="simple2" class="outputVersion1">
                        <div class=" header">
                            <span style="line-height:18.0pt;" class="content">Politique de confidentialité
                                d'un site web</span>
                            <span style="line-height:18.0pt;" class="pageNumbers">Page <span
                                    class="currentPageNum"></span> de <span class="totalPageNum"></span></span>
                        </div>
                        <div class=" footer"></div>
                        <div class=" firstHeader"></div>
                        <div class=" firstFooter">
                            <span style="line-height:18.0pt;" class="pageNumbers">Page <span
                                    class="currentPageNum"></span> de <span class="totalPageNum"></span></span>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Center;">
                                <br><br><span style="font-style:normal;font-weight:bold;">POLITIQUE DE
                                    CONFIDENTIALITÉ</span><br><br><br><span
                                    style="font-style:normal;font-weight:bold;">www.bgrfacile.com</span><br>Bénaja
                                Bendo<br><br>Type de site&nbsp;: un site de formation
                            </p>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span style="font-style:normal;font-weight:bold;text-decoration:underline;">Le but
                                    de cette politique de confidentialité </span><br><br>Le but de cette politique
                                de confidentialité est d'informer les utilisateurs de notre site des données
                                personnelles que nous recueillerons ainsi que les informations suivantes, le cas
                                échéant :
                            </p>
                            <ol start="1"
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;list-style:lower-alpha;">
                                <li style="margin-bottom:18.0pt;" value="1"><span>Les données personnelles que nous
                                        recueillerons</span><span style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:18.0pt;" value="2"><span>L’utilisation des données
                                        recueillies</span><span style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:18.0pt;" value="3"><span>Qui a accès aux données
                                        recueillies</span><span style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:18.0pt;" value="4"><span>Les droits des utilisateurs du
                                        site</span><span style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:0.0pt;" value="5"><span>La politique de cookies du
                                        site</span><span style="color:#000000;"><br></span>
                                </li>
                            </ol>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                Cette politique de confidentialité fonctionne parallèlement aux conditions générales
                                d’utilisation de notre site.
                            </p>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span style="font-style:normal;font-weight:bold;text-decoration:underline;">Lois
                                    applicables</span>
                            </p>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                Conformément au <span style="font-style:italic;font-weight:normal;">Règlement
                                    général sur la protection des données</span> (RGPD), cette politique de
                                confidentialité est conforme aux règlements suivants.<br><br>Les données à caractère
                                personnel doivent être :
                            </p>
                            <ol start="1"
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;list-style:lower-alpha;">
                                <li style="margin-bottom:18.0pt;" value="1"><span>traitées de manière licite, loyale
                                        et transparente au regard de la personne concernée (licéité, loyauté,
                                        transparence) ;</span><span style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:18.0pt;" value="2"><span>collectées pour des finalités
                                        déterminées, explicites et légitimes, et ne pas être traitées ultérieurement
                                        d'une manière incompatible avec ces finalités; le traitement ultérieur à des
                                        fins archivistiques dans l'intérêt public, à des fins de recherche
                                        scientifique ou historique ou à des fins statistiques n'est pas considéré,
                                        conformément à l'article 89, paragraphe 1, comme incompatible avec les
                                        finalités initiales (limitation des finalités) ;</span><span
                                        style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:18.0pt;" value="3"><span>adéquates, pertinentes et limitées
                                        à ce qui est nécessaire au regard des finalités pour lesquelles elles sont
                                        traitées (minimisation des données) ;</span><span
                                        style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:18.0pt;" value="4"><span>exactes et, si nécessaire, tenues
                                        à jour; toutes les mesures raisonnables doivent être prises pour que les
                                        données à caractère personnel qui sont inexactes, eu égard aux finalités
                                        pour lesquelles elles sont traitées, soient effacées ou rectifiées sans
                                        tarder (exactitude) ;</span><span style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:18.0pt;" value="5"><span>conservées sous une forme
                                        permettant l'identification des personnes concernées pendant une durée
                                        n'excédant pas celle nécessaire au regard des finalités pour lesquelles
                                        elles sont traitées; les données à caractère personnel peuvent être
                                        conservées pour des durées plus longues dans la mesure où elles seront
                                        traitées exclusivement à des fins archivistiques dans l'intérêt public, à
                                        des fins de recherche scientifique ou historique ou à des fins statistiques
                                        conformément à l'article 89, paragraphe 1, pour autant que soient mises en
                                        œuvre les mesures techniques et organisationnelles appropriées requises par
                                        le règlement afin de garantir les droits et libertés de la personne
                                        concernée (limitation de la conservation) ;</span><span
                                        style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:0.0pt;" value="6"><span>traitées de façon à garantir une
                                        sécurité appropriée des données à caractère personnel, y compris la
                                        protection contre le traitement non autorisé ou illicite et contre la perte,
                                        la destruction ou les dégâts d'origine accidentelle, à l'aide de mesures
                                        techniques ou organisationnelles appropriées (intégrité et
                                        confidentialité).<br></span><span style="color:#000000;"><br></span>
                                </li>
                            </ol>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                Le traitement n'est licite que si, et dans la mesure où, au moins une des conditions
                                suivantes est remplie :
                            </p>
                            <ol start="1"
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;list-style:lower-alpha;">
                                <li style="margin-bottom:18.0pt;" value="1"><span>la personne concernée a consenti
                                        au traitement de ses données à caractère personnel pour une ou plusieurs
                                        finalités spécifiques ;</span><span style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:18.0pt;" value="2"><span>le traitement est nécessaire à
                                        l'exécution d'un contrat auquel la personne concernée est partie ou à
                                        l'exécution de mesures précontractuelles prises à la demande de celle-ci
                                        ;</span><span style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:18.0pt;" value="3"><span>le traitement est nécessaire au
                                        respect d'une obligation légale à laquelle le responsable du traitement est
                                        soumis ;</span><span style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:18.0pt;" value="4"><span>le traitement est nécessaire à la
                                        sauvegarde des intérêts vitaux de la personne concernée ou d'une autre
                                        personne physique ;</span><span style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:18.0pt;" value="5"><span>le traitement est nécessaire à
                                        l'exécution d'une mission d'intérêt public ou relevant de l'exercice de
                                        l'autorité publique dont est investi le responsable du traitement
                                        ;</span><span style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:0.0pt;" value="6"><span>le traitement est nécessaire aux
                                        fins des intérêts légitimes poursuivis par le responsable du traitement ou
                                        par un tiers, à moins que ne prévalent les intérêts ou les libertés et
                                        droits fondamentaux de la personne concernée qui exigent une protection des
                                        données à caractère personnel, notamment lorsque la personne concernée est
                                        un enfant.</span><span style="color:#000000;"><br></span>
                                </li>
                            </ol>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                Pour les résidents de l’État de Californie, cette politique de confidentialité vise
                                à se conformer à la <span style="font-style:italic;font-weight:normal;">California
                                    Consumer Privacy Act (CCPA)</span>. S’il y a des incohérences entre ce document
                                et la <span style="font-style:italic;font-weight:normal;">CCPA</span>, la
                                législation de l’État s’appliquera. Si nous constatons des incohérences, nous
                                modifierons notre politique pour nous conformer à la loi pertinente.
                            </p>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span
                                    style="font-style:normal;font-weight:bold;text-decoration:underline;">Consentement</span><br><br>Les
                                utilisateurs conviennent qu’en utilisant notre site, ils consentent à :
                            </p>
                            <ol start="1"
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;list-style:lower-alpha;">
                                <li style="margin-bottom:18.0pt;" value="1"><span>les conditions énoncées dans la
                                        présente politique de confidentialité et</span><span
                                        style="color:#000000;"><br></span>
                                </li>
                                <li style="margin-bottom:0.0pt;" value="2"><span>la collecte, l’utilisation et la
                                        conservation des données énumérées dans la présente politique.</span><span
                                        style="color:#000000;"><br></span>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span style="font-style:normal;font-weight:bold;text-decoration:underline;">Données
                                    personnelles que nous collectons</span>
                            </p>
                            <div>
                                <div>
                                    <p
                                        style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                        <span style="font-style:normal;font-weight:bold;">Données collectées
                                            automatiquement</span>
                                    </p>
                                    <p
                                        style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                        Nous ne collectons aucune donnée automatiquement sur notre site.
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                        <span style="font-style:normal;font-weight:bold;">Données recueillies de
                                            façon non automatique</span>
                                    </p>
                                    <p
                                        style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                        Nous pouvons également collecter les données suivantes lorsque vous
                                        effectuez certaines fonctions sur notre site&nbsp;:
                                    </p>
                                    <ol start="1"
                                        style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;list-style:lower-alpha;">
                                        <li style="margin-bottom:18.0pt;" value="1"><span>Prénom et nom</span><span
                                                style="color:#000000;"><br></span>
                                        </li>
                                        <li style="margin-bottom:18.0pt;" value="2"><span>Âge</span><span
                                                style="color:#000000;"><br></span>
                                        </li>
                                        <li style="margin-bottom:18.0pt;" value="3"><span>Date de
                                                naissance</span><span style="color:#000000;"><br></span>
                                        </li>
                                        <li style="margin-bottom:18.0pt;" value="4"><span>Sexe</span><span
                                                style="color:#000000;"><br></span>
                                        </li>
                                        <li style="margin-bottom:18.0pt;" value="5"><span>Email</span><span
                                                style="color:#000000;"><br></span>
                                        </li>
                                        <li style="margin-bottom:0.0pt;" value="6"><span>Numéro de
                                                téléphone</span><span style="color:#000000;"><br></span>
                                        </li>
                                    </ol>
                                    <p
                                        style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                        Ces données peuvent être recueillies au moyen des méthodes suivantes&nbsp;:
                                    </p>
                                    <p
                                        style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                        Enregistrement d'un compte
                                    </p>
                                </div>
                                <p
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                    Veuillez noter que nous ne collectons que les données qui nous aident à
                                    atteindre l’objectif énoncé dans cette politique de confidentialité. Nous ne
                                    recueillerons pas de données supplémentaires sans vous en informer au préalable.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span style="font-style:normal;font-weight:bold;text-decoration:underline;">Comment
                                    nous utilisons les données personnelles</span><br><br>Les données personnelles
                                recueillies sur notre site seront utilisées uniquement aux fins précisées dans la
                                présente politique ou indiquées sur les pages pertinentes de notre site. Nous
                                n’utiliserons pas vos données au-delà de ce que nous divulguerons.
                            </p>
                            <div>
                                <p
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                    Les données que nous recueillons lorsque l’utilisateur exécute certaines
                                    fonctions peuvent être utilisées aux fins suivantes&nbsp;:
                                </p>
                                <ol start="1"
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;list-style:lower-alpha;">
                                    <li style="margin-bottom:0.0pt;" value="1"><span>Communication</span><span
                                            style="color:#000000;"><br></span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span style="font-style:normal;font-weight:bold;text-decoration:underline;">Avec qui
                                    nous partageons les données personnelles</span>
                            </p>
                            <div>
                                <p
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                    <span style="font-style:normal;font-weight:bold;">Employés</span><br>Nous
                                    pouvons divulguer à tout membre de notre organisation les données utilisateur
                                    dont il a raisonnablement besoin pour réaliser les objectifs énoncés dans la
                                    présente politique.
                                </p>
                            </div>
                            <div>
                                <p
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                    <span style="font-style:normal;font-weight:bold;">Tierces parties</span><br>Nous
                                    pouvons partager les données utilisateur avec les tiers suivants&nbsp;:
                                </p>
                                <ol start="1"
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;list-style:lower-alpha;">
                                    <li style="margin-bottom:0.0pt;" value="1"><span>__________</span><span
                                            style="color:#000000;"><br></span>
                                    </li>
                                </ol>
                                <p
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                    Nous pouvons partager les données utilisateur avec des tiers aux fins
                                    suivantes&nbsp;:
                                </p>
                                <ol start="1"
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;list-style:lower-alpha;">
                                    <li style="margin-bottom:0.0pt;" value="1"><span>__________</span><span
                                            style="color:#000000;"><br></span>
                                    </li>
                                </ol>
                                <p
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                    Les tiers ne seront pas en mesure d’accéder aux données des utilisateurs au-delà
                                    de ce qui est raisonnablement nécessaire pour atteindre l’objectif donné.
                                </p>
                            </div>
                            <div>
                                <p
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                    <span style="font-style:normal;font-weight:bold;">Autres
                                        divulgations</span><br>Nous nous engageons à ne pas vendre ou partager vos
                                    données avec des tiers, sauf dans les cas suivants&nbsp;:
                                </p>
                                <ol start="1"
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;list-style:lower-alpha;">
                                    <li style="margin-bottom:18.0pt;" value="1"><span>si la loi l'exige</span><span
                                            style="color:#000000;"><br></span>
                                    </li>
                                    <li style="margin-bottom:18.0pt;" value="2"><span>si elle est requise pour toute
                                            procédure judiciaire</span><span style="color:#000000;"><br></span>
                                    </li>
                                    <li style="margin-bottom:18.0pt;" value="3"><span>pour prouver ou protéger nos
                                            droits légaux</span><span style="color:#000000;"><br></span>
                                    </li>
                                    <li style="margin-bottom:0.0pt;" value="4"><span>à des acheteurs ou des
                                            acheteurs potentiels de cette société dans le cas où nous cherchons à la
                                            vendre la société</span><span style="color:#000000;"><br></span>
                                    </li>
                                </ol>
                                <p
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                    Si vous suivez des hyperliens de notre site vers un autre site, veuillez noter
                                    que nous ne sommes pas responsables et n’avons pas de contrôle sur leurs
                                    politiques et pratiques de confidentialité.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span style="font-style:normal;font-weight:bold;text-decoration:underline;">Combien
                                    de temps nous stockons les données personnelles</span><br><br>Nous ne conservons
                                pas les données des utilisateurs au-delà de ce qui est nécessaire pour atteindre les
                                fins pour lesquelles elles sont recueillies.
                            </p>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span style="font-style:normal;font-weight:bold;text-decoration:underline;">Comment
                                    nous protégeons vos données personnelles</span><br><br>Afin d’assurer la
                                protection de votre sécurité, nous utilisons le protocole de sécurité de la couche
                                transport pour transmettre des renseignements personnels dans notre
                                système.<br><br>Toutes les données stockées dans notre système sont bien sécurisées
                                et ne sont accessibles qu’à nos employés. Nos employés sont liés par des accords de
                                confidentialité stricts et une violation de cet accord entraînerait le licenciement
                                de l'employé.<br><br>Alors que nous prenons toutes les précautions raisonnables pour
                                nous assurer que nos données d’utilisateur sont sécurisées et que les utilisateurs
                                sont protégés, il reste toujours du risque de préjudice. L’Internet en sa totalité
                                peut être, parfois, peu sûr et donc nous sommes incapables de garantir la sécurité
                                des données des utilisateurs au-delà de ce qui est raisonnablement pratique.
                            </p>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span
                                    style="font-style:normal;font-weight:bold;text-decoration:underline;">Mineurs</span>
                            </p>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                Le RGPD précise que les personnes de moins de 15 ans sont considérées comme des
                                mineurs aux fins de la collecte de données. Les mineurs doivent avoir le
                                consentement d’un représentant légal pour que leurs données soient recueillies,
                                traitées et utilisées.
                            </p>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span style="font-style:normal;font-weight:bold;text-decoration:underline;">Vos
                                    droits en tant qu’utilisateur</span>
                            </p>
                            <div>
                                <p
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                    En vertu du RGPD, les utilisateurs ont les droits suivants en tant que personnes
                                    concernées :
                                </p>
                                <ol start="1"
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;list-style:lower-alpha;">
                                    <li style="margin-bottom:18.0pt;" value="1"><span>droit d’accès</span><span
                                            style="color:#000000;"><br></span>
                                    </li>
                                    <li style="margin-bottom:18.0pt;" value="2"><span>droit de
                                            rectification</span><span style="color:#000000;"><br></span>
                                    </li>
                                    <li style="margin-bottom:18.0pt;" value="3"><span>droit à
                                            l’effacement</span><span style="color:#000000;"><br></span>
                                    </li>
                                    <li style="margin-bottom:18.0pt;" value="4"><span>droit de restreindre le
                                            traitement</span><span style="color:#000000;"><br></span>
                                    </li>
                                    <li style="margin-bottom:18.0pt;" value="5"><span>droit à la portabilité des
                                            données</span><span style="color:#000000;"><br></span>
                                    </li>
                                    <li style="margin-bottom:0.0pt;" value="6"><span>droit d'objection</span><span
                                            style="color:#000000;"><br></span>
                                    </li>
                                </ol>
                                <p
                                    style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                    Vous trouverez de plus amples informations sur ces droits au chapitre 3 (art
                                    12-23) du RGPD.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span style="font-style:normal;font-weight:bold;text-decoration:underline;">Comment
                                    modifier, supprimer ou contester les données recueillies</span><br><br>Si vous
                                souhaitez que vos renseignements soient supprimés ou modifiés d’une façon ou d’une
                                autre, veuillez communiquer avec notre agent de protection de la vie privée ici :
                            </p>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;margin-left:20.0pt;">
                                __________<br>benaja.bendo02@gmail.com
                            </p>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span style="font-style:normal;font-weight:bold;text-decoration:underline;">Politique
                                    sur les cookies</span><br><br>Un cookie est un petit fichier, stocké sur le
                                disque dur d’un utilisateur par le site Web. Son but est de recueillir des données
                                relatives aux habitudes de navigation de l’utilisateur.
                            </p>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                Nous utilisons les types de cookies suivants sur notre site&nbsp;:
                            </p>
                            <ol start="1"
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;list-style:lower-alpha;">
                                <li style="margin-bottom:18.0pt;" value="1"><span
                                        style="font-style:normal;font-weight:bold;">Cookies
                                        fonctionnels</span><br>Nous les utilisons pour mémoriser toutes les
                                    sélections que vous faites sur notre site afin qu’elles soient sauvegardées pour
                                    vos prochaines visites.<span style="color:#000000;"><br></span>
                                </li>

                            </ol>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                Vous pouvez choisir d’être averti chaque fois qu’un cookie est transmis. Vous pouvez
                                également choisir de désactiver les cookies entièrement dans votre navigateur
                                Internet, mais cela peut diminuer la qualité de votre expérience d’utilisation.
                            </p>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span
                                    style="font-style:normal;font-weight:bold;text-decoration:underline;">Modifications</span>
                            </p>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                Cette politique de confidentialité peut être modifiée à l’occasion afin de maintenir
                                la conformité avec la loi et de tenir compte de tout changement à notre processus de
                                collecte de données. Nous recommandons à nos utilisateurs de vérifier notre
                                politique de temps à autre pour s’assurer qu’ils soient informés de toute mise à
                                jour. Au besoin, nous pouvons informer les utilisateurs par courriel des changements
                                apportés à cette politique.
                            </p>
                        </div>
                        <div>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                <span
                                    style="font-style:normal;font-weight:bold;text-decoration:underline;">Contact</span>
                            </p>
                            <p
                                style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                                Si vous avez des questions à nous poser, n’hésitez pas à communiquer avec nous en
                                utilisant ce qui suit&nbsp;:<br>benaja.bendo02@gmail.com
                            </p>
                        </div>
                        <p
                            style="line-height:18.0pt;font-size:12.0pt;line-height:18.0pt;font-family:Times New Roman;color:#000000;text-align:Left;">
                            <br><span style="font-style:italic;font-weight:normal;">Date d’entrée en vigueur&nbsp;:
                            </span>le 31 mars 2022
                        </p>
                        <div class="LDCopyright">
                            <p>&copy; 2002-2022, DocumentsLégaux&trade; (Sequiter Inc.)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-site-layout>
