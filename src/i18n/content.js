// Text for every page, per language. English is the source; the others follow it.
export const LANGS = [
  { code: 'en', html: 'en', label: 'English', short: 'EN', prefix: '' },
  { code: 'ko', html: 'ko', label: '한국어', short: 'KO', prefix: '/ko' },
  { code: 'ja', html: 'ja', label: '日本語', short: 'JA', prefix: '/ja' },
  { code: 'zh', html: 'zh-Hans', label: '中文', short: '中文', prefix: '/zh' },
];

export const GH = {
  org: 'https://github.com/mindmapmarkdown',
  spec: 'https://github.com/mindmapmarkdown/spec',
  specmd: 'https://github.com/mindmapmarkdown/spec/blob/main/spec.md',
  mindmapmd: 'https://github.com/mindmapmarkdown/mindmapmd',
  discussions: 'https://github.com/mindmapmarkdown/spec/discussions',
  rfcs: 'https://github.com/mindmapmarkdown/spec/tree/main/rfcs',
  governance: 'https://github.com/mindmapmarkdown/spec/blob/main/GOVERNANCE.md',
  contributing: 'https://github.com/mindmapmarkdown/spec/blob/main/CONTRIBUTING.md',
  brand: 'https://github.com/mindmapmarkdown/.github/tree/main/brand',
};

const COLORS = ['#0F2A3F', '#E8603C', '#2DD4BF', '#14B8A6', '#0D9488', '#0F766E', '#5B6F86', '#B4C2D3', '#FFFFFF'];
const COLOR_NAMES = ['Navy · AI', 'Coral · Human', 'Leaf 1', 'Leaf 2', 'Leaf 3', 'Leaf 4', 'Arrow Slate', 'Arrow Mist', 'White'];
const colors = (uses) => COLORS.map((hex, i) => ({ name: COLOR_NAMES[i], hex, use: uses[i] }));

export const T = {
  en: {
    meta: {
      title: 'Mindmap Markdown — a round-trip-stable Markdown profile',
      description: 'Mindmap Markdown is a round-trip-stable Markdown profile for human–AI knowledge exchange.',
      brandTitle: 'Logo and brand · Mindmap Markdown',
    },
    nav: ['Why', 'Specification', 'Viewer', 'Implementations', 'Community'],
    ui: { github: 'GitHub', menu: 'Menu', brand: 'Logo & brand', language: 'Language' },
    hero: {
      badge: 'Draft · developed in the open',
      h1: 'The same knowledge,<br>for humans and AI alike.',
      sub: 'Mindmap Markdown is a <b>round-trip-stable Markdown profile</b> for human–AI knowledge exchange.',
      cta1: 'Read the spec', cta2: 'View on GitHub', lift: 'Lift', projection: 'Projection',
    },
    four: {
      title: 'A format that serves people and machines needs four properties',
      desc: 'Markdown delivers three of them outright. The fourth holds only while the document stays shallow.',
      props: [['Open standard', 'anyone can use and implement'], ['Machine-readable', 'parsers read it exactly'], ['AI-readable', 'LLMs read it as-is'], ['Human-readable', 'only while shallow']],
      check: '✓ Markdown', scale: ['depth 1–2', '3–4', '5+'],
      chartTitle: 'As depth grows, only the human loses the shape', note: 'conceptual · not measured',
      axisX: 'hierarchy depth', axisY: 'how well structure is seen',
      l1: 'machine · AI', l2: 'human · as plain text', l3: 'human · as a tree', gap: 'the gap Mindmap Markdown closes',
    },
    loss: {
      title: 'Drawing the tree is easy.<br>Getting back without losing anything is not.',
      desc: 'Once a document has real hierarchical depth, a human can no longer see its shape in plain text, while the same structure is trivially legible when drawn as a tree. When an LLM rewrites a document, these are silently destroyed, and no standard yet treats this as a problem.',
      items: ['Node identity', 'Human annotations', 'Layout', 'Review history'],
    },
    views: {
      title: 'One self-contained HTML file. Two views.',
      desc: 'A Mindmap Markdown document renders to a single self-contained HTML file: no server, no runtime, no installation. The viewer carries two views of the same document, because no single view survives every scale.',
      mindmap: ['Mindmap', 'shape, at a glance', 'holds up when depth is high'],
      outline: ['Outline', 'sequence, navigable', 'holds up when node count is high'],
    },
    levels: {
      title: 'Conformance levels',
      desc: 'Levels are cumulative. An implementation states the highest level it claims.',
      items: [
        ['L0', 'Read', 'A conforming document is ordinary Markdown. Its hierarchy survives in every existing Markdown tool.', 'Every Markdown tool'],
        ['L1', 'Structure', 'Lift and canonical projection: a document determines one tree, a tree determines one document, and the two are mutually inverse.', 'Implemented in mindmapmd'],
        ['L2', 'Round-trip', 'Structural diff and merge between trees, and working on a subtree without the rest of the document.', 'Rules not yet written'],
      ],
      more: 'Read the specification',
    },
    principles: {
      title: 'Design constraints',
      items: [
        ['It is still Markdown', 'A Mindmap Markdown file opens and renders in GitHub, Obsidian, or any editor you already use. Adoption cost starts at zero.'],
        ['Semantics in, presentation beside', 'Layout and styling live in a sidecar, never in the text sent to a model.'],
        ['Conformance is testable', 'A specification that cannot be checked is a suggestion. The spec and its test suite come from the same source.'],
        ['Interoperate, not compete', 'Adapters for existing formats such as OPML, JSON Canvas, and markmap come first.'],
      ],
    },
    repos: {
      title: 'Repositories',
      items: [
        ['spec', 'The specification and its normative examples', 'public'],
        ['mindmapmd', 'Reference implementation: lift and canonical projection', 'L1'],
        ['conformance', 'Test suite, runner, and implementation registry', 'planned'],
        ['adapters', 'Interoperability with OPML, JSON Canvas, and markmap', 'planned'],
      ],
    },
    join: {
      title: 'The most useful moment to disagree is now',
      desc: 'The specification is at its earliest and most changeable stage.',
      cta: ['Read the draft', 'Ask or propose', 'Implement it'],
    },
    footer: { license: 'Specification text CC-BY-4.0 · Code Apache-2.0', contact: 'Questions', security: 'Security' },
    brand: {
      crumb: 'Brand', title: 'Logo and brand',
      lead: 'A cool document and a warm structure join into one, and at its edge, thinking expands.',
      storyT: 'The story of the mark',
      story: [
        ['MD', 'The document AI reads. Emotionless, cool navy. Named after the .md extension itself.'],
        ['Root and branches', 'The structure people read. Coral, the color of warmth. The root grows from the curve of the D: document and map are one body.'],
        ['Four leaves', 'Thinking expanding. Light to deep green, ideas reaching further and deeper along each branch.'],
        ['Upper arrow', 'The document unfolds into a map (lift). It ends at the right edge of the leaves.'],
        ['Lower arrow', 'The map returns to the document (canonical projection). It ends at the first stroke of the M.'],
        ['The loop', 'Two arrows close one loop. Round-trip stable: nothing is lost in either direction.'],
      ],
      colorT: 'Color palette', colorD: 'The mark uses only these colors. Each one carries a meaning.',
      colors: colors(['MD letters, body text', 'Root and branches', 'First leaf (lightest)', 'Second leaf', 'Third leaf', 'Fourth leaf (deepest)', 'Frame arrows on light backgrounds', 'Frame arrows on dark backgrounds', 'MD on dark backgrounds']),
      consT: 'Construction and alignment', consD: 'The mark is drawn on a 128-unit grid. These rules hold at every size.',
      rules: ['The gap between M and D is 4 (one fifth of the 20-unit stroke).', 'MD height 49 : map height 121. MD stays smaller; the map leads.', 'The center of MD, the root, and the center of the leaves sit on one line.', 'The root overlaps the rightmost point of the D curve.', 'Branches are 8 wide: a moderate curve, then horizontal into each leaf.', 'Leaves have radius 12.5, symmetric about the center line.', 'Upper arrow tip = right edge of the leaves. Lower arrow tip = left edge of the M.', 'Frame stroke 5.5, filled triangular arrowheads. Clear space: at least a quarter of the height.'],
      guides: { a: 'lower tip = left of M', b: 'upper tip = right of leaves', c: 'center line', d: 'M–D gap 4', e: 'MD 49', f: 'map 121', h: 'clear space = 1/4 height' },
      verT: 'Versions and where to use them',
      vers: [['Framed', 'Large placements: avatars, share images, slide covers. 48 px tall or more.'], ['Plain', 'Site header, inside documents, small spaces. 20 px tall or more.'], ['Favicon', 'Browser tabs and app icons. A dedicated map-only icon.'], ['On dark', 'MD turns white, arrows use Arrow Mist. Map colors stay.']],
      dontT: 'Don’t', donts: ['Recolor', 'Stretch', 'Rotate', 'Add shadows or effects'],
      dlT: 'Downloads',
      dl: [['Mark', 'logo/mindmapmarkdown-mark.svg'], ['Mark on dark', 'logo/mindmapmarkdown-mark-on-dark.svg'], ['Framed', 'logo/mindmapmarkdown-framed.svg'], ['Framed on dark', 'logo/mindmapmarkdown-framed-on-dark.svg'], ['Mono navy', 'logo/mindmapmarkdown-mark-mono-navy.svg'], ['Mono white', 'logo/mindmapmarkdown-mark-mono-white.svg'], ['Favicon', 'favicon/favicon.svg'], ['Avatar 512 px', 'avatar/avatar-framed-navy-512.png']],
      lic: 'You may use the mark to refer to the Mindmap Markdown project. Do not use it in a way that suggests endorsement or official status. The M glyph derives from the Markdown Mark by Dustin Curtis (public domain, CC0).',
      gh: 'This guide is also on GitHub',
    },
  },

  ko: {
    meta: {
      title: 'Mindmap Markdown — 왕복 안정 마크다운 프로파일',
      description: 'Mindmap Markdown은 인간과 AI가 같은 지식을 각자의 표현으로 다루기 위한 왕복 안정(round-trip stable) 마크다운 프로파일입니다.',
      brandTitle: '로고와 브랜드 · Mindmap Markdown',
    },
    nav: ['왜 필요한가', '사양', '뷰어', '구현', '커뮤니티'],
    ui: { github: 'GitHub', menu: '메뉴', brand: '브랜드 · 로고', language: '언어' },
    hero: {
      badge: 'Draft · 공개적으로 다듬는 중',
      h1: '인간과 AI가 같은 지식을<br>각자의 표현으로.',
      sub: 'Mindmap Markdown은 인간과 AI가 같은 지식을 각자의 표현으로 다루기 위한 <b>왕복 안정(round-trip stable) 마크다운 프로파일</b>입니다.',
      cta1: '사양 읽기', cta2: 'GitHub에서 보기', lift: 'Lift', projection: 'Projection',
    },
    four: {
      title: '문서 형식이 사람과 기계를 모두 감당하려면 네 가지가 필요합니다',
      desc: '마크다운은 앞의 셋을 만족합니다. 남은 하나는 문서가 얕을 때만 유지됩니다.',
      props: [['공개 표준', '누구나 쓰고 구현'], ['기계 판독', '파서가 정확히 해석'], ['AI 가독', 'LLM이 그대로 읽음'], ['사람 가독', '문서가 얕을 때만']],
      check: '✓ Markdown', scale: ['깊이 1–2', '3–4', '5+'],
      chartTitle: '계층이 깊어질수록 사람만 구조를 잃습니다', note: '개념도 · 측정값 아님',
      axisX: '문서 계층 깊이', axisY: '구조를 읽어내는 정도',
      l1: '기계 · AI', l2: '사람 · 평문으로 볼 때', l3: '사람 · 트리로 볼 때', gap: 'Mindmap Markdown이 메우는 간극',
    },
    loss: {
      title: '트리로 그리는 것은 쉽습니다.<br>손실 없이 되돌리는 것이 어렵습니다.',
      desc: '계층이 깊어지면 사람은 평문에서 구조를 볼 수 없습니다. 같은 구조를 트리로 그리면 즉시 읽히는데도 말입니다. 그런데 LLM이 문서를 재작성하는 순간 아래 정보가 조용히 사라지며, 이를 문제로 다루는 표준은 아직 없습니다.',
      items: ['노드 정체성', '사람이 단 주석', '레이아웃', '검토 이력'],
    },
    views: {
      title: '설치 없는 단일 HTML, 두 개의 뷰',
      desc: 'Mindmap Markdown 문서는 아무것도 설치할 필요 없는 단일 HTML 파일로 렌더링되며, 그 뷰어는 마인드맵과 아웃라인 두 뷰를 함께 제공합니다. 어떤 단일 뷰도 모든 규모에서 작동하지 않기 때문입니다.',
      mindmap: ['마인드맵', '한눈에 보는 형태', '깊이가 깊을 때 강함'],
      outline: ['아웃라인', '탐색 가능한 순서', '노드 수가 많을 때 강함'],
    },
    levels: {
      title: '적합성 수준',
      desc: '수준은 누적됩니다. 구현은 자신이 주장하는 가장 높은 수준을 밝힙니다.',
      items: [
        ['L0', 'Read', '적합한 문서는 평범한 마크다운입니다. 기존 모든 마크다운 도구에서 계층이 유지됩니다.', '모든 마크다운 도구'],
        ['L1', 'Structure', '문서 → 트리(lift), 트리 → 문서(canonical projection)가 하나씩 정해지며 서로 역함수입니다.', 'mindmapmd에서 구현'],
        ['L2', 'Round-trip', '트리 간 구조적 diff·merge, 문서 전체 없이 하위 트리 단위로 다루기.', '규칙 작성 전'],
      ],
      more: '사양 읽기',
    },
    principles: {
      title: '설계 원칙',
      items: [
        ['여전히 마크다운', 'GitHub, Obsidian 등 지금 쓰는 편집기에서 그대로 열립니다. 도입 비용은 0에서 시작합니다.'],
        ['의미는 문서에, 표현은 옆에', '레이아웃과 스타일은 sidecar에 두고, 모델에 보내는 텍스트에는 넣지 않습니다.'],
        ['검증 가능한 적합성', '확인할 수 없는 사양은 제안일 뿐입니다. 사양과 테스트는 같은 소스에서 생성됩니다.'],
        ['경쟁보다 상호운용', 'OPML, JSON Canvas, markmap 등 기존 형식용 어댑터를 먼저 만듭니다.'],
      ],
    },
    repos: {
      title: '저장소',
      items: [
        ['spec', '사양과 규범 예제', '공개'],
        ['mindmapmd', '참조 구현: lift · canonical projection', 'L1'],
        ['conformance', '테스트 스위트, 러너, 구현 레지스트리', '예정'],
        ['adapters', 'OPML · JSON Canvas · markmap 상호운용', '예정'],
      ],
    },
    join: {
      title: '지금이 반대 의견을 내기 가장 좋은 때입니다',
      desc: '사양은 가장 초기이자 가장 바뀌기 쉬운 단계에 있습니다.',
      cta: ['초안 읽기', '질문 · 제안하기', '독립 구현하기'],
    },
    footer: { license: '사양 텍스트 CC-BY-4.0 · 코드 Apache-2.0', contact: '문의', security: '보안' },
    brand: {
      crumb: '브랜드', title: '로고와 브랜드',
      lead: '차가운 문서와 따뜻한 구조가 하나로 이어지고, 그 끝에서 생각이 확장됩니다.',
      storyT: '로고 이야기',
      story: [
        ['MD', 'AI가 읽는 문서. 감정 없는 차가운 네이비. 마크다운 파일 확장자 .md 그대로입니다.'],
        ['루트와 가지', '사람이 읽는 구조. 체온을 가진 코랄. 루트는 D의 곡선 끝에서 시작해, 문서와 맵이 한 몸임을 보여 줍니다.'],
        ['잎 4개', '생각의 확장. 연한 녹색에서 진한 녹색으로, 가지를 따라 생각이 뻗어 나가며 깊어집니다.'],
        ['위쪽 화살표', '문서가 맵으로 펼쳐집니다 (lift). 끝은 잎의 오른쪽 끝에 닿습니다.'],
        ['아래쪽 화살표', '맵이 문서로 돌아옵니다 (canonical projection). 끝은 M의 첫 획에 닿습니다.'],
        ['순환', '두 화살표가 하나의 고리를 이룹니다. 어느 방향으로 바꿔도 잃는 것이 없는 왕복 안정(round-trip stable).'],
      ],
      colorT: '색상표', colorD: '로고에는 아래 색만 씁니다. 각 색에는 맡은 의미가 있습니다.',
      colors: colors(['MD 글자, 본문', '루트 원, 가지', '첫째 잎 (가장 연함)', '둘째 잎', '셋째 잎', '넷째 잎 (가장 진함)', '테두리 화살표 (밝은 배경)', '테두리 화살표 (어두운 배경)', '어두운 배경 위 MD']),
      consT: '구성과 정렬', consD: '로고는 128 단위 격자 위에서 그렸습니다. 아래 규칙은 크기가 달라져도 그대로 지킵니다.',
      rules: ['M과 D 사이 간격은 4 (글자 획 굵기 20의 1/5).', 'MD 높이 49 : 맵 높이 121. MD는 맵보다 작게, 맵이 주인공입니다.', 'MD의 가운데, 루트 원, 잎 무리의 가운데가 한 줄(중심선) 위에 놓입니다.', '루트 원은 D 곡선의 가장 오른쪽 점에 겹쳐 붙습니다.', '가지는 굵기 8. 적당한 곡선으로 나간 뒤 수평으로 잎에 닿습니다.', '잎은 반지름 12.5, 중심선을 기준으로 위아래 대칭입니다.', '위쪽 화살표 끝 = 잎의 오른쪽 끝선. 아래쪽 화살표 끝 = M의 왼쪽 끝선.', '테두리 선 굵기 5.5, 화살촉은 채운 삼각형. 여백은 높이의 1/4 이상.'],
      guides: { a: '아래 화살표 끝 = M 왼쪽', b: '위 화살표 끝 = 잎 오른쪽', c: '중심선', d: 'M–D 간격 4', e: 'MD 49', f: '맵 121', h: '여백 = 높이의 1/4' },
      verT: '버전과 사용처',
      vers: [['테두리 버전', 'GitHub 프로필 사진, 공유 이미지, 발표 자료 표지처럼 크게 보이는 곳. 높이 48px 이상.'], ['기본 버전', '홈페이지 헤더, 문서 안, 작은 자리. 높이 20px 이상.'], ['파비콘', '브라우저 탭과 앱 아이콘. 맵만 남긴 전용 아이콘.'], ['어두운 배경', 'MD는 흰색, 화살표는 Arrow Mist. 맵 색은 그대로.']],
      dontT: '하지 말 것', donts: ['색 바꾸기', '비율 늘이기', '회전하기', '그림자 · 효과 넣기'],
      dlT: '내려받기',
      dl: [['로고 (기본)', 'logo/mindmapmarkdown-mark.svg'], ['로고 (어두운 배경)', 'logo/mindmapmarkdown-mark-on-dark.svg'], ['로고 (테두리)', 'logo/mindmapmarkdown-framed.svg'], ['로고 (테두리 · 어두운 배경)', 'logo/mindmapmarkdown-framed-on-dark.svg'], ['단색 네이비', 'logo/mindmapmarkdown-mark-mono-navy.svg'], ['단색 흰색', 'logo/mindmapmarkdown-mark-mono-white.svg'], ['파비콘', 'favicon/favicon.svg'], ['프로필 사진 512px', 'avatar/avatar-framed-navy-512.png']],
      lic: '로고는 Mindmap Markdown 프로젝트를 가리키는 용도로 자유롭게 쓸 수 있습니다. 프로젝트가 보증하거나 공식 구현인 것처럼 보이게 쓰지는 마세요. M 글자는 Dustin Curtis의 Markdown Mark(퍼블릭 도메인, CC0)에서 왔습니다.',
      gh: '이 안내는 GitHub에도 있습니다',
    },
  },

  ja: {
    meta: {
      title: 'Mindmap Markdown — 往復安定なMarkdownプロファイル',
      description: 'Mindmap Markdownは、人とAIが同じ知識をそれぞれの表現で扱うための往復安定（round-trip stable）なMarkdownプロファイルです。',
      brandTitle: 'ロゴとブランド · Mindmap Markdown',
    },
    nav: ['なぜ必要か', '仕様', 'ビューア', '実装', 'コミュニティ'],
    ui: { github: 'GitHub', menu: 'メニュー', brand: 'ロゴとブランド', language: '言語' },
    hero: {
      badge: 'Draft · 公開で策定中',
      h1: '人とAIが、同じ知識を<br>それぞれの表現で。',
      sub: 'Mindmap Markdownは、人とAIが同じ知識をそれぞれの表現で扱うための<b>往復安定（round-trip stable）なMarkdownプロファイル</b>です。',
      cta1: '仕様を読む', cta2: 'GitHubで見る', lift: 'Lift', projection: 'Projection',
    },
    four: {
      title: '人と機械の両方に役立つ文書形式には、4つの条件が必要です',
      desc: 'Markdownは最初の3つを満たします。残る1つは、文書が浅いあいだしか保たれません。',
      props: [['公開標準', '誰でも使い、実装できる'], ['機械可読', 'パーサーが正確に解釈'], ['AI可読', 'LLMがそのまま読める'], ['人間可読', '文書が浅いあいだだけ']],
      check: '✓ Markdown', scale: ['深さ1–2', '3–4', '5+'],
      chartTitle: '階層が深くなるほど、人だけが構造を見失う', note: '概念図・実測値ではありません',
      axisX: '文書の階層の深さ', axisY: '構造の読み取りやすさ',
      l1: '機械・AI', l2: '人・プレーンテキストで', l3: '人・ツリーで', gap: 'Mindmap Markdownが埋める差',
    },
    loss: {
      title: 'ツリーとして描くのは簡単です。<br>何も失わずに戻すのが難しいのです。',
      desc: '階層が深くなると、人はプレーンテキストから構造を読み取れなくなります。同じ構造をツリーで描けばすぐに読めるのに、です。しかしLLMが文書を書き換えた瞬間、以下の情報は静かに失われます。これを問題として扱う標準はまだありません。',
      items: ['ノードの同一性', '人が付けた注釈', 'レイアウト', 'レビュー履歴'],
    },
    views: {
      title: 'インストール不要の単一HTML、2つのビュー',
      desc: 'Mindmap Markdownの文書は、何もインストールせずに開ける単一のHTMLファイルとして描画されます。そのビューアはマインドマップとアウトラインの2つのビューを備えています。どのビューも単独では、あらゆる規模に対応できないからです。',
      mindmap: ['マインドマップ', 'ひと目でわかる形', '階層が深いときに強い'],
      outline: ['アウトライン', 'たどれる順序', 'ノード数が多いときに強い'],
    },
    levels: {
      title: '適合性レベル',
      desc: 'レベルは累積的です。実装は、自らが主張する最も高いレベルを明示します。',
      items: [
        ['L0', 'Read', '適合する文書は普通のMarkdownです。既存のあらゆるMarkdownツールで階層が保たれます。', 'すべてのMarkdownツール'],
        ['L1', 'Structure', '文書→ツリー（lift）とツリー→文書（canonical projection）がそれぞれ一つに定まり、互いに逆関数になります。', 'mindmapmdで実装'],
        ['L2', 'Round-trip', 'ツリー間の構造的なdiff・merge、文書全体なしで部分木を扱うこと。', '規則は未作成'],
      ],
      more: '仕様を読む',
    },
    principles: {
      title: '設計原則',
      items: [
        ['それでもMarkdown', 'GitHubやObsidianなど、いま使っているエディタでそのまま開けます。導入コストはゼロから。'],
        ['意味は文書に、表現はその横に', 'レイアウトとスタイルはサイドカーに置き、モデルに送るテキストには含めません。'],
        ['検証できる適合性', '確かめられない仕様は提案にすぎません。仕様とテストは同じソースから生成されます。'],
        ['競合より相互運用', 'OPML、JSON Canvas、markmapなど既存形式のアダプターを先に作ります。'],
      ],
    },
    repos: {
      title: 'リポジトリ',
      items: [
        ['spec', '仕様と規範例', '公開'],
        ['mindmapmd', '参照実装：lift・canonical projection', 'L1'],
        ['conformance', 'テストスイート、ランナー、実装レジストリ', '予定'],
        ['adapters', 'OPML・JSON Canvas・markmapとの相互運用', '予定'],
      ],
    },
    join: {
      title: '反対意見を出すなら、今がいちばんです',
      desc: '仕様はもっとも初期で、もっとも変えやすい段階にあります。',
      cta: ['ドラフトを読む', '質問・提案する', '独自に実装する'],
    },
    footer: { license: '仕様テキスト CC-BY-4.0 · コード Apache-2.0', contact: 'お問い合わせ', security: 'セキュリティ' },
    brand: {
      crumb: 'ブランド', title: 'ロゴとブランド',
      lead: '冷たい文書と温かい構造がひとつにつながり、その先で思考が広がる。',
      storyT: 'ロゴの物語',
      story: [
        ['MD', 'AIが読む文書。感情のない冷たいネイビー。拡張子 .md そのものです。'],
        ['ルートと枝', '人が読む構造。体温を感じるコーラル。ルートはDの曲線の端から伸び、文書とマップが一体であることを示します。'],
        ['4つの葉', '思考の広がり。淡い緑から深い緑へ、枝に沿って考えが伸び、深まっていきます。'],
        ['上の矢印', '文書がマップへ広がる（lift）。先端は葉の右端に揃います。'],
        ['下の矢印', 'マップが文書へ戻る（canonical projection）。先端はMの最初の画に揃います。'],
        ['循環', '2本の矢印がひとつの輪をつくります。どちらへ変換しても失われない、往復安定（round-trip stable）。'],
      ],
      colorT: 'カラーパレット', colorD: 'ロゴには以下の色だけを使います。それぞれに意味があります。',
      colors: colors(['MDの文字、本文', 'ルートと枝', '1枚目の葉（最も淡い）', '2枚目の葉', '3枚目の葉', '4枚目の葉（最も深い）', '枠の矢印（明るい背景）', '枠の矢印（暗い背景）', '暗い背景上のMD']),
      consT: '構成と配置', consD: 'ロゴは128単位のグリッド上で描かれています。どのサイズでも以下の規則を守ります。',
      rules: ['MとDの間隔は4（線幅20の5分の1）。', 'MDの高さ49：マップの高さ121。MDは小さく、主役はマップ。', 'MDの中心、ルート、葉の群れの中心は一本の中心線上に並びます。', 'ルートはDの曲線の最も右の点に重ねて接続します。', '枝の太さは8。ほどよい曲線のあと水平に葉へ届きます。', '葉の半径は12.5、中心線に対して上下対称。', '上の矢印の先端＝葉の右端。下の矢印の先端＝Mの左端。', '枠線の太さ5.5、矢じりは塗りつぶしの三角形。余白は高さの1/4以上。'],
      guides: { a: '下の先端＝Mの左端', b: '上の先端＝葉の右端', c: '中心線', d: 'M–D間隔 4', e: 'MD 49', f: 'マップ 121', h: '余白＝高さの1/4' },
      verT: 'バージョンと使い分け',
      vers: [['枠付き', 'プロフィール画像、共有画像、スライド表紙など大きく見せる場所。高さ48px以上。'], ['基本', 'サイトのヘッダー、文書内、小さな場所。高さ20px以上。'], ['ファビコン', 'ブラウザのタブとアプリアイコン。マップだけの専用アイコン。'], ['暗い背景', 'MDは白、矢印はArrow Mist。マップの色はそのまま。']],
      dontT: 'してはいけないこと', donts: ['色を変える', '縦横比を変える', '回転する', '影や効果を付ける'],
      dlT: 'ダウンロード',
      dl: [['ロゴ（基本）', 'logo/mindmapmarkdown-mark.svg'], ['ロゴ（暗い背景）', 'logo/mindmapmarkdown-mark-on-dark.svg'], ['ロゴ（枠付き）', 'logo/mindmapmarkdown-framed.svg'], ['ロゴ（枠付き・暗い背景）', 'logo/mindmapmarkdown-framed-on-dark.svg'], ['単色ネイビー', 'logo/mindmapmarkdown-mark-mono-navy.svg'], ['単色ホワイト', 'logo/mindmapmarkdown-mark-mono-white.svg'], ['ファビコン', 'favicon/favicon.svg'], ['プロフィール画像 512px', 'avatar/avatar-framed-navy-512.png']],
      lic: 'ロゴはMindmap Markdownプロジェクトを指す目的で自由に使えます。プロジェクトの保証や公式実装であるかのように見せる使い方はしないでください。MのグリフはDustin CurtisのMarkdown Mark（パブリックドメイン、CC0）に由来します。',
      gh: 'このガイドはGitHubにもあります',
    },
  },

  zh: {
    meta: {
      title: 'Mindmap Markdown — 往返稳定的 Markdown 规范',
      description: 'Mindmap Markdown 是一种往返稳定（round-trip stable）的 Markdown 规范（profile），让人与 AI 能以各自的表达方式处理同一份知识。',
      brandTitle: '标志与品牌 · Mindmap Markdown',
    },
    nav: ['为何需要', '规范', '查看器', '实现', '社区'],
    ui: { github: 'GitHub', menu: '菜单', brand: '标志与品牌', language: '语言' },
    hero: {
      badge: 'Draft · 公开制定中',
      h1: '人与 AI，<br>以各自的方式处理同一份知识。',
      sub: 'Mindmap Markdown 是一种<b>往返稳定（round-trip stable）的 Markdown 规范（profile）</b>，让人与 AI 能以各自的表达方式处理同一份知识。',
      cta1: '阅读规范', cta2: '在 GitHub 上查看', lift: 'Lift', projection: 'Projection',
    },
    four: {
      title: '一种同时服务于人和机器的文档格式，需要具备四个条件',
      desc: 'Markdown 满足前三个。最后一个只在文档层级较浅时才成立。',
      props: [['开放标准', '任何人都可使用和实现'], ['机器可读', '解析器可准确解析'], ['AI 可读', 'LLM 可直接读取'], ['人类可读', '仅在层级较浅时']],
      check: '✓ Markdown', scale: ['深度 1–2', '3–4', '5+'],
      chartTitle: '层级越深，只有人会看不清结构', note: '概念图 · 非实测数据',
      axisX: '文档层级深度', axisY: '结构可辨识程度',
      l1: '机器 · AI', l2: '人 · 阅读纯文本', l3: '人 · 以树形查看', gap: 'Mindmap Markdown 弥合的差距',
    },
    loss: {
      title: '把它画成树很容易。<br>无损地转换回来却很难。',
      desc: '层级一旦变深，人就无法从纯文本中看出结构，而同样的结构画成树却一目了然。可是当 LLM 重写文档时，下列信息会悄无声息地丢失，而目前还没有任何标准把这当作问题。',
      items: ['节点标识', '人工批注', '布局', '审阅记录'],
    },
    views: {
      title: '无需安装的单个 HTML，两种视图',
      desc: 'Mindmap Markdown 文档可渲染为一个无需安装任何东西的单一 HTML 文件，其查看器同时提供思维导图和大纲两种视图。因为没有哪一种视图能适应所有规模。',
      mindmap: ['思维导图', '一眼看清形状', '层级深时更有优势'],
      outline: ['大纲', '可逐项浏览的顺序', '节点多时更有优势'],
    },
    levels: {
      title: '一致性级别',
      desc: '级别是累积的。实现需声明其所主张的最高级别。',
      items: [
        ['L0', 'Read', '符合规范的文档就是普通的 Markdown，在现有所有 Markdown 工具中都能保留层级。', '所有 Markdown 工具'],
        ['L1', 'Structure', '文档 → 树（lift）与树 → 文档（canonical projection）各自唯一确定，并互为逆运算。', '已在 mindmapmd 中实现'],
        ['L2', 'Round-trip', '树之间的结构化 diff 与 merge，以及脱离整篇文档单独处理子树。', '规则尚未编写'],
      ],
      more: '阅读规范',
    },
    principles: {
      title: '设计原则',
      items: [
        ['依然是 Markdown', '可在 GitHub、Obsidian 等你正在使用的编辑器中直接打开，采用成本从零开始。'],
        ['语义在文档中，呈现在旁边', '布局和样式放在 sidecar 中，绝不放入发送给模型的文本。'],
        ['可验证的一致性', '无法检验的规范只是建议。规范与测试由同一来源生成。'],
        ['互操作优先于竞争', '优先为 OPML、JSON Canvas、markmap 等现有格式开发适配器。'],
      ],
    },
    repos: {
      title: '代码仓库',
      items: [
        ['spec', '规范及其规范性示例', '公开'],
        ['mindmapmd', '参考实现：lift 与 canonical projection', 'L1'],
        ['conformance', '测试套件、运行器和实现登记', '计划中'],
        ['adapters', '与 OPML、JSON Canvas、markmap 的互操作', '计划中'],
      ],
    },
    join: {
      title: '提出异议的最佳时机就是现在',
      desc: '规范正处于最早期、也最容易修改的阶段。',
      cta: ['阅读草案', '提问或提议', '独立实现'],
    },
    footer: { license: '规范文本 CC-BY-4.0 · 代码 Apache-2.0', contact: '联系', security: '安全' },
    brand: {
      crumb: '品牌', title: '标志与品牌',
      lead: '冰冷的文档与温暖的结构连为一体，思考在其尽头展开。',
      storyT: '标志的故事',
      story: [
        ['MD', 'AI 阅读的文档。不带情感的冷色海军蓝。直接取自文件扩展名 .md。'],
        ['根节点与分支', '人阅读的结构。带有体温的珊瑚色。根节点从 D 的曲线末端长出，表明文档与导图本为一体。'],
        ['四片叶子', '思考的延伸。从浅绿到深绿，想法沿着分支不断伸展、加深。'],
        ['上方箭头', '文档展开为导图（lift）。箭头末端对齐叶子的右缘。'],
        ['下方箭头', '导图回到文档（canonical projection）。箭头末端对齐 M 的第一笔。'],
        ['循环', '两支箭头围成一个环。往返稳定（round-trip stable）：无论朝哪个方向转换，都不丢失任何信息。'],
      ],
      colorT: '色板', colorD: '标志只使用以下颜色，每种颜色都有其含义。',
      colors: colors(['MD 字母、正文', '根节点与分支', '第一片叶子（最浅）', '第二片叶子', '第三片叶子', '第四片叶子（最深）', '边框箭头（浅色背景）', '边框箭头（深色背景）', '深色背景上的 MD']),
      consT: '结构与对齐', consD: '标志绘制在 128 单位的网格上。无论尺寸如何，都遵循以下规则。',
      rules: ['M 与 D 的间距为 4（笔画宽度 20 的五分之一）。', 'MD 高度 49 : 导图高度 121。MD 较小，导图是主角。', 'MD 的中心、根节点、叶子组的中心位于同一条中心线上。', '根节点与 D 曲线最右侧的点重叠相连。', '分支宽 8，先以适度的曲线延伸，再水平连接到叶子。', '叶子半径 12.5，以中心线上下对称。', '上方箭头末端 = 叶子右缘。下方箭头末端 = M 左缘。', '边框线宽 5.5，箭头为实心三角形。留白不小于高度的 1/4。'],
      guides: { a: '下箭头末端 = M 左缘', b: '上箭头末端 = 叶子右缘', c: '中心线', d: 'M–D 间距 4', e: 'MD 49', f: '导图 121', h: '留白 = 高度的 1/4' },
      verT: '版本与使用场景',
      vers: [['带边框版', '头像、分享图片、演示封面等大尺寸场景。高度不小于 48px。'], ['基本版', '网站页眉、文档内、小尺寸位置。高度不小于 20px。'], ['网站图标', '浏览器标签页与应用图标。只保留导图的专用图标。'], ['深色背景', 'MD 改为白色，箭头使用 Arrow Mist，导图颜色不变。']],
      dontT: '禁止事项', donts: ['更改颜色', '拉伸比例', '旋转', '添加阴影或特效'],
      dlT: '下载',
      dl: [['标志（基本）', 'logo/mindmapmarkdown-mark.svg'], ['标志（深色背景）', 'logo/mindmapmarkdown-mark-on-dark.svg'], ['标志（带边框）', 'logo/mindmapmarkdown-framed.svg'], ['标志（带边框・深色背景）', 'logo/mindmapmarkdown-framed-on-dark.svg'], ['单色海军蓝', 'logo/mindmapmarkdown-mark-mono-navy.svg'], ['单色白色', 'logo/mindmapmarkdown-mark-mono-white.svg'], ['网站图标', 'favicon/favicon.svg'], ['头像 512px', 'avatar/avatar-framed-navy-512.png']],
      lic: '可自由使用本标志来指代 Mindmap Markdown 项目，但请勿以暗示项目认可或官方身份的方式使用。M 字形源自 Dustin Curtis 的 Markdown Mark（公有领域，CC0）。',
      gh: '本指南也发布在 GitHub 上',
    },
  },
};

// '/' , '/brand/', '/ko/', '/ko/brand/' ...
export const pathFor = (lang, page = '') => {
  const p = LANGS.find((l) => l.code === lang).prefix;
  return page ? `${p}/${page}/` : `${p}/`;
};
