import React from 'react';

interface DottedWorldMapProps {
  className?: string;
  showArcs?: boolean;
  highlightPins?: boolean;
  height?: number | string;
  width?: number | string;
}

export const DottedWorldMap: React.FC<DottedWorldMapProps> = ({
  className = '',
  showArcs = true,
  highlightPins = true,
  height = '100%',
  width = '100%',
}) => {
  // Dot coordinates calculated for continents in high fidelity:
  // Coordinates are generated in grid increments (x: 40..780, y: 30..390)
  // Matching real world geography: Greenland, North America, Central & South America,
  // Europe, Scandinavia, British Isles, Africa, Middle East, Russia/North Asia, East Asia,
  // Southeast Asia, Japan, India, Australia, New Zealand.

  return (
    <div className={`relative select-none ${className}`}>
      <svg
        viewBox="0 0 880 440"
        width={width}
        height={height}
        className="w-full h-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle glow filter for pins */}
          <filter id="pin-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#b24b27" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* CONTINENT DOTS GROUP */}
        <g fill="#c9b9a6" opacity="0.85">
          {/* ================= NORTH AMERICA ================= */}
          {/* Alaska & Yukon */}
          <circle cx="85" cy="85" r="2.2" /><circle cx="97" cy="82" r="2.2" /><circle cx="109" cy="80" r="2.2" />
          <circle cx="80" cy="95" r="2.2" /><circle cx="92" cy="94" r="2.2" /><circle cx="104" cy="92" r="2.2" /><circle cx="116" cy="90" r="2.2" />
          <circle cx="88" cy="106" r="2.2" /><circle cx="100" cy="105" r="2.2" /><circle cx="112" cy="103" r="2.2" /><circle cx="124" cy="101" r="2.2" />
          
          {/* Canada */}
          <circle cx="130" cy="75" r="2.2" /><circle cx="142" cy="72" r="2.2" /><circle cx="154" cy="70" r="2.2" /><circle cx="166" cy="68" r="2.2" />
          <circle cx="136" cy="86" r="2.2" /><circle cx="148" cy="84" r="2.2" /><circle cx="160" cy="82" r="2.2" /><circle cx="172" cy="80" r="2.2" /><circle cx="184" cy="78" r="2.2" /><circle cx="196" cy="76" r="2.2" />
          <circle cx="130" cy="98" r="2.2" /><circle cx="142" cy="96" r="2.2" /><circle cx="154" cy="94" r="2.2" /><circle cx="166" cy="92" r="2.2" /><circle cx="178" cy="90" r="2.2" /><circle cx="190" cy="88" r="2.2" /><circle cx="202" cy="86" r="2.2" />
          <circle cx="136" cy="110" r="2.2" /><circle cx="148" cy="108" r="2.2" /><circle cx="160" cy="106" r="2.2" /><circle cx="172" cy="104" r="2.2" /><circle cx="184" cy="102" r="2.2" /><circle cx="196" cy="100" r="2.2" /><circle cx="208" cy="98" r="2.2" /><circle cx="220" cy="96" r="2.2" />
          <circle cx="142" cy="122" r="2.2" /><circle cx="154" cy="120" r="2.2" /><circle cx="166" cy="118" r="2.2" /><circle cx="178" cy="116" r="2.2" /><circle cx="190" cy="114" r="2.2" /><circle cx="202" cy="112" r="2.2" /><circle cx="214" cy="110" r="2.2" /><circle cx="226" cy="108" r="2.2" />

          {/* Greenland */}
          <circle cx="280" cy="45" r="2.2" /><circle cx="292" cy="42" r="2.2" /><circle cx="304" cy="40" r="2.2" />
          <circle cx="275" cy="56" r="2.2" /><circle cx="287" cy="54" r="2.2" /><circle cx="299" cy="52" r="2.2" /><circle cx="311" cy="50" r="2.2" />
          <circle cx="282" cy="68" r="2.2" /><circle cx="294" cy="66" r="2.2" /><circle cx="306" cy="64" r="2.2" />

          {/* United States */}
          <circle cx="135" cy="134" r="2.2" /><circle cx="147" cy="132" r="2.2" /><circle cx="159" cy="130" r="2.2" /><circle cx="171" cy="128" r="2.2" /><circle cx="183" cy="126" r="2.2" /><circle cx="195" cy="124" r="2.2" /><circle cx="207" cy="122" r="2.2" /><circle cx="219" cy="120" r="2.2" /><circle cx="231" cy="118" r="2.2" /><circle cx="243" cy="116" r="2.2" />
          <circle cx="140" cy="146" r="2.2" /><circle cx="152" cy="144" r="2.2" /><circle cx="164" cy="142" r="2.2" /><circle cx="176" cy="140" r="2.2" /><circle cx="188" cy="138" r="2.2" /><circle cx="200" cy="136" r="2.2" /><circle cx="212" cy="134" r="2.2" /><circle cx="224" cy="132" r="2.2" /><circle cx="236" cy="130" r="2.2" />
          <circle cx="145" cy="158" r="2.2" /><circle cx="157" cy="156" r="2.2" /><circle cx="169" cy="154" r="2.2" /><circle cx="181" cy="152" r="2.2" /><circle cx="193" cy="150" r="2.2" /><circle cx="205" cy="148" r="2.2" /><circle cx="217" cy="146" r="2.2" /><circle cx="229" cy="144" r="2.2" />
          <circle cx="155" cy="170" r="2.2" /><circle cx="167" cy="168" r="2.2" /><circle cx="179" cy="166" r="2.2" /><circle cx="191" cy="164" r="2.2" /><circle cx="203" cy="162" r="2.2" /><circle cx="215" cy="160" r="2.2" /><circle cx="227" cy="158" r="2.2" />

          {/* Mexico & Central America */}
          <circle cx="165" cy="182" r="2.2" /><circle cx="177" cy="180" r="2.2" /><circle cx="189" cy="178" r="2.2" /><circle cx="201" cy="176" r="2.2" /><circle cx="213" cy="174" r="2.2" />
          <circle cx="172" cy="194" r="2.2" /><circle cx="184" cy="192" r="2.2" /><circle cx="196" cy="190" r="2.2" />
          <circle cx="180" cy="206" r="2.2" /><circle cx="192" cy="204" r="2.2" /><circle cx="204" cy="202" r="2.2" />
          <circle cx="208" cy="216" r="2.2" /><circle cx="218" cy="222" r="2.2" /><circle cx="228" cy="228" r="2.2" />

          {/* Caribbean */}
          <circle cx="240" cy="185" r="2.2" /><circle cx="252" cy="188" r="2.2" /><circle cx="264" cy="192" r="2.2" />

          {/* ================= SOUTH AMERICA ================= */}
          <circle cx="240" cy="242" r="2.2" /><circle cx="252" cy="240" r="2.2" /><circle cx="264" cy="238" r="2.2" /><circle cx="276" cy="242" r="2.2" />
          <circle cx="235" cy="254" r="2.2" /><circle cx="247" cy="252" r="2.2" /><circle cx="259" cy="250" r="2.2" /><circle cx="271" cy="252" r="2.2" /><circle cx="283" cy="256" r="2.2" /><circle cx="295" cy="260" r="2.2" />
          <circle cx="238" cy="266" r="2.2" /><circle cx="250" cy="264" r="2.2" /><circle cx="262" cy="262" r="2.2" /><circle cx="274" cy="264" r="2.2" /><circle cx="286" cy="268" r="2.2" /><circle cx="298" cy="272" r="2.2" /><circle cx="310" cy="276" r="2.2" />
          <circle cx="245" cy="278" r="2.2" /><circle cx="257" cy="276" r="2.2" /><circle cx="269" cy="276" r="2.2" /><circle cx="281" cy="280" r="2.2" /><circle cx="293" cy="284" r="2.2" /><circle cx="305" cy="288" r="2.2" />
          <circle cx="250" cy="290" r="2.2" /><circle cx="262" cy="288" r="2.2" /><circle cx="274" cy="290" r="2.2" /><circle cx="286" cy="294" r="2.2" /><circle cx="298" cy="298" r="2.2" />
          <circle cx="255" cy="302" r="2.2" /><circle cx="267" cy="302" r="2.2" /><circle cx="279" cy="304" r="2.2" /><circle cx="291" cy="308" r="2.2" />
          <circle cx="258" cy="314" r="2.2" /><circle cx="270" cy="314" r="2.2" /><circle cx="282" cy="316" r="2.2" />
          <circle cx="260" cy="326" r="2.2" /><circle cx="272" cy="326" r="2.2" /><circle cx="284" cy="328" r="2.2" />
          <circle cx="262" cy="338" r="2.2" /><circle cx="274" cy="338" r="2.2" />
          <circle cx="265" cy="350" r="2.2" /><circle cx="272" cy="350" r="2.2" />
          <circle cx="268" cy="362" r="2.2" />

          {/* ================= EUROPE ================= */}
          {/* British Isles */}
          <circle cx="415" cy="110" r="2.2" /><circle cx="418" cy="118" r="2.2" /><circle cx="424" cy="114" r="2.2" /><circle cx="422" cy="124" r="2.2" />
          
          {/* Scandinavia */}
          <circle cx="452" cy="74" r="2.2" /><circle cx="464" cy="72" r="2.2" />
          <circle cx="448" cy="86" r="2.2" /><circle cx="460" cy="84" r="2.2" /><circle cx="472" cy="82" r="2.2" />
          <circle cx="450" cy="98" r="2.2" /><circle cx="462" cy="96" r="2.2" /><circle cx="474" cy="94" r="2.2" />

          {/* Western & Central Europe */}
          <circle cx="430" cy="132" r="2.2" /><circle cx="442" cy="128" r="2.2" /><circle cx="454" cy="124" r="2.2" /><circle cx="466" cy="120" r="2.2" /><circle cx="478" cy="118" r="2.2" /><circle cx="490" cy="116" r="2.2" /><circle cx="502" cy="114" r="2.2" />
          <circle cx="424" cy="144" r="2.2" /><circle cx="436" cy="140" r="2.2" /><circle cx="448" cy="136" r="2.2" /><circle cx="460" cy="132" r="2.2" /><circle cx="472" cy="130" r="2.2" /><circle cx="484" cy="128" r="2.2" /><circle cx="496" cy="126" r="2.2" />
          
          {/* Iberian Peninsula & Mediterranean */}
          <circle cx="416" cy="156" r="2.2" /><circle cx="426" cy="154" r="2.2" /><circle cx="440" cy="148" r="2.2" /><circle cx="452" cy="144" r="2.2" /><circle cx="464" cy="142" r="2.2" /><circle cx="476" cy="140" r="2.2" /><circle cx="488" cy="138" r="2.2" />
          <circle cx="414" cy="166" r="2.2" /><circle cx="424" cy="164" r="2.2" /><circle cx="456" cy="154" r="2.2" /><circle cx="468" cy="150" r="2.2" /><circle cx="480" cy="148" r="2.2" />

          {/* ================= AFRICA ================= */}
          <circle cx="422" cy="184" r="2.2" /><circle cx="434" cy="180" r="2.2" /><circle cx="446" cy="178" r="2.2" /><circle cx="458" cy="176" r="2.2" /><circle cx="470" cy="176" r="2.2" /><circle cx="482" cy="178" r="2.2" /><circle cx="494" cy="180" r="2.2" /><circle cx="506" cy="182" r="2.2" />
          <circle cx="418" cy="196" r="2.2" /><circle cx="430" cy="192" r="2.2" /><circle cx="442" cy="190" r="2.2" /><circle cx="454" cy="188" r="2.2" /><circle cx="466" cy="188" r="2.2" /><circle cx="478" cy="190" r="2.2" /><circle cx="490" cy="192" r="2.2" /><circle cx="502" cy="194" r="2.2" /><circle cx="514" cy="196" r="2.2" />
          <circle cx="410" cy="208" r="2.2" /><circle cx="422" cy="206" r="2.2" /><circle cx="434" cy="204" r="2.2" /><circle cx="446" cy="202" r="2.2" /><circle cx="458" cy="200" r="2.2" /><circle cx="470" cy="200" r="2.2" /><circle cx="482" cy="202" r="2.2" /><circle cx="494" cy="204" r="2.2" /><circle cx="506" cy="206" r="2.2" /><circle cx="518" cy="208" r="2.2" /><circle cx="530" cy="214" r="2.2" />
          <circle cx="416" cy="220" r="2.2" /><circle cx="428" cy="218" r="2.2" /><circle cx="440" cy="216" r="2.2" /><circle cx="452" cy="214" r="2.2" /><circle cx="464" cy="212" r="2.2" /><circle cx="476" cy="214" r="2.2" /><circle cx="488" cy="216" r="2.2" /><circle cx="500" cy="218" r="2.2" /><circle cx="512" cy="220" r="2.2" /><circle cx="524" cy="224" r="2.2" />
          <circle cx="438" cy="232" r="2.2" /><circle cx="450" cy="228" r="2.2" /><circle cx="462" cy="226" r="2.2" /><circle cx="474" cy="226" r="2.2" /><circle cx="486" cy="228" r="2.2" /><circle cx="498" cy="230" r="2.2" /><circle cx="510" cy="234" r="2.2" /><circle cx="522" cy="238" r="2.2" />
          <circle cx="456" cy="244" r="2.2" /><circle cx="468" cy="240" r="2.2" /><circle cx="480" cy="240" r="2.2" /><circle cx="492" cy="242" r="2.2" /><circle cx="504" cy="246" r="2.2" /><circle cx="516" cy="250" r="2.2" />
          <circle cx="462" cy="256" r="2.2" /><circle cx="474" cy="254" r="2.2" /><circle cx="486" cy="254" r="2.2" /><circle cx="498" cy="256" r="2.2" /><circle cx="510" cy="260" r="2.2" />
          <circle cx="466" cy="268" r="2.2" /><circle cx="478" cy="266" r="2.2" /><circle cx="490" cy="266" r="2.2" /><circle cx="502" cy="270" r="2.2" /><circle cx="538" cy="274" r="2.2" />
          <circle cx="470" cy="280" r="2.2" /><circle cx="482" cy="278" r="2.2" /><circle cx="494" cy="280" r="2.2" /><circle cx="506" cy="284" r="2.2" /><circle cx="534" cy="286" r="2.2" />
          <circle cx="474" cy="292" r="2.2" /><circle cx="486" cy="290" r="2.2" /><circle cx="498" cy="292" r="2.2" />
          <circle cx="478" cy="304" r="2.2" /><circle cx="490" cy="304" r="2.2" />
          <circle cx="482" cy="316" r="2.2" />

          {/* ================= ASIA & RUSSIA ================= */}
          {/* North Asia / Siberia */}
          <circle cx="514" cy="72" r="2.2" /><circle cx="526" cy="70" r="2.2" /><circle cx="538" cy="68" r="2.2" /><circle cx="550" cy="66" r="2.2" /><circle cx="562" cy="66" r="2.2" /><circle cx="574" cy="68" r="2.2" /><circle cx="586" cy="70" r="2.2" /><circle cx="598" cy="72" r="2.2" /><circle cx="610" cy="74" r="2.2" /><circle cx="622" cy="76" r="2.2" /><circle cx="634" cy="78" r="2.2" /><circle cx="646" cy="80" r="2.2" />
          <circle cx="508" cy="84" r="2.2" /><circle cx="520" cy="82" r="2.2" /><circle cx="532" cy="80" r="2.2" /><circle cx="544" cy="78" r="2.2" /><circle cx="556" cy="78" r="2.2" /><circle cx="568" cy="80" r="2.2" /><circle cx="580" cy="82" r="2.2" /><circle cx="592" cy="84" r="2.2" /><circle cx="604" cy="86" r="2.2" /><circle cx="616" cy="88" r="2.2" /><circle cx="628" cy="90" r="2.2" /><circle cx="640" cy="92" r="2.2" /><circle cx="652" cy="94" r="2.2" /><circle cx="664" cy="96" r="2.2" /><circle cx="676" cy="98" r="2.2" />
          <circle cx="512" cy="96" r="2.2" /><circle cx="524" cy="94" r="2.2" /><circle cx="536" cy="92" r="2.2" /><circle cx="548" cy="90" r="2.2" /><circle cx="560" cy="90" r="2.2" /><circle cx="572" cy="92" r="2.2" /><circle cx="584" cy="94" r="2.2" /><circle cx="596" cy="96" r="2.2" /><circle cx="608" cy="98" r="2.2" /><circle cx="620" cy="100" r="2.2" /><circle cx="632" cy="102" r="2.2" /><circle cx="644" cy="104" r="2.2" /><circle cx="656" cy="106" r="2.2" /><circle cx="668" cy="108" r="2.2" /><circle cx="680" cy="110" r="2.2" />

          {/* Central Asia */}
          <circle cx="518" cy="108" r="2.2" /><circle cx="530" cy="106" r="2.2" /><circle cx="542" cy="104" r="2.2" /><circle cx="554" cy="102" r="2.2" /><circle cx="566" cy="104" r="2.2" /><circle cx="578" cy="106" r="2.2" /><circle cx="590" cy="108" r="2.2" /><circle cx="602" cy="110" r="2.2" /><circle cx="614" cy="112" r="2.2" /><circle cx="626" cy="114" r="2.2" /><circle cx="638" cy="116" r="2.2" /><circle cx="650" cy="118" r="2.2" /><circle cx="662" cy="120" r="2.2" />
          <circle cx="516" cy="120" r="2.2" /><circle cx="528" cy="118" r="2.2" /><circle cx="540" cy="116" r="2.2" /><circle cx="552" cy="116" r="2.2" /><circle cx="564" cy="118" r="2.2" /><circle cx="576" cy="120" r="2.2" /><circle cx="588" cy="122" r="2.2" /><circle cx="600" cy="124" r="2.2" /><circle cx="612" cy="126" r="2.2" /><circle cx="624" cy="128" r="2.2" /><circle cx="636" cy="130" r="2.2" /><circle cx="648" cy="132" r="2.2" /><circle cx="660" cy="134" r="2.2" />

          {/* Middle East */}
          <circle cx="498" cy="146" r="2.2" /><circle cx="510" cy="144" r="2.2" /><circle cx="522" cy="142" r="2.2" /><circle cx="534" cy="140" r="2.2" /><circle cx="546" cy="142" r="2.2" />
          <circle cx="504" cy="158" r="2.2" /><circle cx="516" cy="156" r="2.2" /><circle cx="528" cy="154" r="2.2" /><circle cx="540" cy="154" r="2.2" />
          <circle cx="512" cy="170" r="2.2" /><circle cx="524" cy="168" r="2.2" /><circle cx="536" cy="168" r="2.2" />

          {/* East Asia & China */}
          <circle cx="558" cy="130" r="2.2" /><circle cx="570" cy="132" r="2.2" /><circle cx="582" cy="134" r="2.2" /><circle cx="594" cy="136" r="2.2" /><circle cx="606" cy="138" r="2.2" /><circle cx="618" cy="140" r="2.2" /><circle cx="630" cy="142" r="2.2" /><circle cx="642" cy="144" r="2.2" /><circle cx="654" cy="146" r="2.2" /><circle cx="666" cy="146" r="2.2" /><circle cx="678" cy="148" r="2.2" />
          <circle cx="562" cy="144" r="2.2" /><circle cx="574" cy="146" r="2.2" /><circle cx="586" cy="148" r="2.2" /><circle cx="598" cy="150" r="2.2" /><circle cx="610" cy="152" r="2.2" /><circle cx="622" cy="154" r="2.2" /><circle cx="634" cy="156" r="2.2" /><circle cx="646" cy="158" r="2.2" /><circle cx="658" cy="158" r="2.2" /><circle cx="670" cy="158" r="2.2" />
          <circle cx="576" cy="160" r="2.2" /><circle cx="588" cy="162" r="2.2" /><circle cx="600" cy="164" r="2.2" /><circle cx="612" cy="166" r="2.2" /><circle cx="624" cy="168" r="2.2" /><circle cx="636" cy="170" r="2.2" /><circle cx="648" cy="170" r="2.2" /><circle cx="660" cy="170" r="2.2" />

          {/* Japan */}
          <circle cx="692" cy="142" r="2.2" /><circle cx="698" cy="150" r="2.2" /><circle cx="690" cy="158" r="2.2" />

          {/* South Asia / India */}
          <circle cx="568" cy="174" r="2.2" /><circle cx="580" cy="176" r="2.2" /><circle cx="592" cy="178" r="2.2" /><circle cx="604" cy="180" r="2.2" />
          <circle cx="572" cy="186" r="2.2" /><circle cx="584" cy="188" r="2.2" /><circle cx="596" cy="190" r="2.2" />
          <circle cx="576" cy="198" r="2.2" /><circle cx="588" cy="200" r="2.2" /><circle cx="600" cy="202" r="2.2" />
          <circle cx="580" cy="210" r="2.2" /><circle cx="592" cy="212" r="2.2" />
          <circle cx="584" cy="222" r="2.2" /><circle cx="596" cy="228" r="2.2" />

          {/* Southeast Asia & Vietnam */}
          <circle cx="618" cy="182" r="2.2" /><circle cx="630" cy="184" r="2.2" /><circle cx="642" cy="184" r="2.2" /><circle cx="654" cy="184" r="2.2" />
          <circle cx="622" cy="194" r="2.2" /><circle cx="634" cy="196" r="2.2" /><circle cx="646" cy="196" r="2.2" /><circle cx="658" cy="196" r="2.2" />
          <circle cx="626" cy="206" r="2.2" /><circle cx="638" cy="208" r="2.2" /><circle cx="650" cy="208" r="2.2" />
          <circle cx="630" cy="218" r="2.2" /><circle cx="642" cy="220" r="2.2" /><circle cx="652" cy="220" r="2.2" />
          <circle cx="636" cy="232" r="2.2" /><circle cx="644" cy="234" r="2.2" /><circle cx="670" cy="210" r="2.2" /><circle cx="678" cy="222" r="2.2" />
          
          {/* Indonesia / Malaysia archipelago */}
          <circle cx="638" cy="248" r="2.2" /><circle cx="650" cy="246" r="2.2" /><circle cx="662" cy="248" r="2.2" /><circle cx="674" cy="250" r="2.2" /><circle cx="686" cy="254" r="2.2" />
          <circle cx="644" cy="260" r="2.2" /><circle cx="656" cy="260" r="2.2" /><circle cx="668" cy="262" r="2.2" /><circle cx="698" cy="262" r="2.2" />

          {/* ================= AUSTRALIA & OCEANIA ================= */}
          <circle cx="682" cy="296" r="2.2" /><circle cx="694" cy="294" r="2.2" /><circle cx="706" cy="296" r="2.2" /><circle cx="718" cy="300" r="2.2" />
          <circle cx="676" cy="308" r="2.2" /><circle cx="688" cy="306" r="2.2" /><circle cx="700" cy="306" r="2.2" /><circle cx="712" cy="308" r="2.2" /><circle cx="724" cy="312" r="2.2" />
          <circle cx="678" cy="320" r="2.2" /><circle cx="690" cy="318" r="2.2" /><circle cx="702" cy="318" r="2.2" /><circle cx="714" cy="320" r="2.2" /><circle cx="726" cy="324" r="2.2" />
          <circle cx="684" cy="332" r="2.2" /><circle cx="696" cy="330" r="2.2" /><circle cx="708" cy="330" r="2.2" /><circle cx="720" cy="334" r="2.2" />
          <circle cx="690" cy="344" r="2.2" /><circle cx="702" cy="344" r="2.2" /><circle cx="714" cy="346" r="2.2" />
          <circle cx="708" cy="358" r="2.2" />

          {/* New Zealand */}
          <circle cx="760" cy="350" r="2.2" /><circle cx="764" cy="360" r="2.2" /><circle cx="758" cy="370" r="2.2" />
        </g>

        {/* CONNECTION FLIGHT ARCS (Bridges connecting Paris and the world) */}
        {showArcs && (
          <g stroke="#b24b27" strokeWidth="1.2" opacity="0.75">
            {/* Paris [436, 140] to Hanoi [650, 208] */}
            <path
              d="M 436 140 Q 540 85 650 208"
              fill="none"
              strokeDasharray="4 3"
              strokeLinecap="round"
            />

            {/* Paris [436, 140] to North America [200, 136] */}
            <path
              d="M 436 140 Q 320 80 200 136"
              fill="none"
              strokeDasharray="4 3"
              strokeLinecap="round"
            />

            {/* Paris [436, 140] to Africa / Middle East [506, 206] */}
            <path
              d="M 436 140 Q 480 160 506 206"
              fill="none"
              strokeDasharray="3 3"
              strokeLinecap="round"
            />

            {/* Hanoi [650, 208] to Tokyo [692, 142] */}
            <path
              d="M 650 208 Q 675 165 692 142"
              fill="none"
              strokeDasharray="3 3"
              strokeLinecap="round"
            />

            {/* Secondary subtle cross arc */}
            <path
              d="M 200 136 Q 300 240 264 262"
              fill="none"
              strokeDasharray="2 3"
              opacity="0.4"
            />
          </g>
        )}

        {/* HIGHLIGHTED LOCATION PINS */}
        {highlightPins && (
          <g>
            {/* PIN 1: PARIS (436, 140) */}
            <g transform="translate(436, 140)">
              {/* Outer pulsing ring */}
              <circle cx="0" cy="0" r="8" fill="#b24b27" fillOpacity="0.2" className="animate-pulse" />
              {/* White border circle */}
              <circle cx="0" cy="0" r="4.5" fill="#ffffff" stroke="#b24b27" strokeWidth="1.5" />
              {/* Inner terracotta core */}
              <circle cx="0" cy="0" r="2.5" fill="#b24b27" filter="url(#pin-glow)" />
              {/* Label */}
              <text x="-2" y="-10" textAnchor="end" fontSize="9" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.8" fill="#4a3728">
                PARIS
              </text>
            </g>

            {/* PIN 2: HANOI (650, 208) */}
            <g transform="translate(650, 208)">
              {/* Outer pulsing ring */}
              <circle cx="0" cy="0" r="8" fill="#b24b27" fillOpacity="0.2" className="animate-pulse" />
              {/* White border circle */}
              <circle cx="0" cy="0" r="4.5" fill="#ffffff" stroke="#b24b27" strokeWidth="1.5" />
              {/* Inner terracotta core */}
              <circle cx="0" cy="0" r="2.5" fill="#b24b27" filter="url(#pin-glow)" />
              {/* Label */}
              <text x="8" y="14" textAnchor="start" fontSize="9" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.8" fill="#4a3728">
                HANOI
              </text>
            </g>

            {/* PIN 3: NEW YORK (200, 136) */}
            <g transform="translate(200, 136)">
              <circle cx="0" cy="0" r="3.5" fill="#b24b27" fillOpacity="0.8" />
              <circle cx="0" cy="0" r="1.8" fill="#ffffff" />
            </g>

            {/* PIN 4: TOKYO (692, 142) */}
            <g transform="translate(692, 142)">
              <circle cx="0" cy="0" r="3.5" fill="#b24b27" fillOpacity="0.8" />
              <circle cx="0" cy="0" r="1.8" fill="#ffffff" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
