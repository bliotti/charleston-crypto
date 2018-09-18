const companies = [
  {
    _id: 'company_commit-good',
    type: 'company',
    name: 'Commit Good',
    description: 'Blockchain good',
    firstName: 'Clay',
    lastName: 'Matthews',
    site: 'https://commitgood.com/',
    img:
      'https://pbs.twimg.com/profile_images/942810476899057666/O7XYB0WT_400x400.jpg'
  },
  {
    _id: 'company_blockyard',
    type: 'company',
    name: 'BlockYard',
    description: 'Mining Facility',
    firstName: 'Brett',
    lastName: 'Garmen',
    site: 'https://www.garmansouthern.com/',
    img:
      'https://static1.squarespace.com/static/5710312ac2ea51282965b4a0/t/5b4de9c1aa4a99d6f5bc2a19/1533299065363/?format=original'
  },
  {
    _id: 'company_palmetto-chain',
    type: 'company',
    name: 'Palmetto Chain',
    description: 'Blockchain of Charleston',
    firstName: 'Drew',
    lastName: 'Poda',
    site: 'https://palmettochain.io/',
    img:
      '  https://img1.wsimg.com/isteam/ip/29eef9b7-b694-488b-afb4-ff7569a0d10e/8d203d56-c0ab-475c-a69a-e4117bdc3564.png/:/rs=w:200,h:220,cg:true,m/cr=w:300,h:220,a:cc'
  }
]

const data = [
  {
    _id: 'category_getting-started',
    type: 'category',
    name: 'Getting Started',
    icon: 'G',
    sortKey: 1,
    featured: true
  },
  {
    _id: 'category_history-of-bitcoin',
    type: 'category',
    name: 'History of Bitcoin',
    icon: 'H',
    sortKey: 2,
    featured: false
  },
  {
    _id: 'category_news-sites',
    type: 'category',
    name: 'News Sites',
    icon: 'N',
    sortKey: 3,
    featured: false
  },
  {
    _id: 'category_podcasts',
    type: 'category',
    name: 'Podcasts',
    icon: 'P',
    sortKey: 4,
    featured: true
  },
  {
    _id: 'category_discussion-forums',
    type: 'category',
    name: 'Discussion Forums',
    icon: 'D',
    sortKey: 5,
    featured: false
  },
  {
    _id: 'category_miscellaneous-statistics',
    type: 'category',
    name: 'Miscellaneous Statistics',
    icon: 'M',
    sortKey: 6,
    featured: false
  },
  {
    _id: 'category_transaction-fee-estimates',
    type: 'category',
    name: 'Transaction Fee Estimates',
    icon: 'T',
    sortKey: 7,
    featured: false
  },
  {
    _id: 'category_block-explorers',
    type: 'category',
    name: 'Block Explorers',
    icon: 'B',
    sortKey: 8,
    featured: false
  },

  {
    _id: 'category_visualizations',
    type: 'category',
    name: 'Visualizations',
    icon: 'V',
    sortKey: 9,
    featured: true
  },
  {
    _id: 'category_mining',
    type: 'category',
    name: 'Mining',
    icon: 'M',
    sortKey: 10,
    featured: false
  },
  {
    _id: 'category_deep-dive-technical-resources',
    type: 'category',
    name: 'Deep Dive Technical Resources',
    icon: 'D',
    sortKey: 11,
    featured: false
  },
  {
    _id: 'category_developer-tools',
    type: 'category',
    name: 'Developer Tools',
    icon: 'P',
    sortKey: 12,
    featured: false
  },
  {
    _id: 'category_security',
    type: 'category',
    name: 'Security',
    icon: 'D',
    sortKey: 13,
    featured: false
  },
  {
    _id: 'category_miscellaneous-statistics',
    type: 'category',
    name: 'Miscellaneous Statistics',
    icon: 'M',
    sortKey: 14,
    featured: false
  },
  {
    _id: 'category_setting-up-a-wallet',
    type: 'category',
    name: 'Setting up a Wallet',
    icon: 'S',
    sortKey: 15,
    featured: false
  },
  {
    _id: 'category_running-a-node',
    type: 'category',
    name: 'Running a Node',
    icon: 'R',
    sortKey: 16,
    featured: false
  },

  {
    _id: 'category_online-courses',
    type: 'category',
    name: 'Online Courses',
    icon: 'P',
    sortKey: 17,
    featured: false
  },
  {
    _id: 'category_documentaries',
    type: 'category',
    name: 'Documentaries',
    icon: 'D',
    sortKey: 18,
    featured: false
  },
  {
    _id: 'category_video-presentations',
    type: 'category',
    name: 'Video Presentations',
    icon: 'M',
    sortKey: 19,
    featured: false
  },
  {
    _id: 'category_high-quality-blogs',
    type: 'category',
    name: 'High Quality Blogs',
    icon: 'T',
    sortKey: 20,
    featured: false
  },
  {
    _id: 'category_buying-bitcoins',
    type: 'category',
    name: 'Buying Bitcoins',
    icon: 'B',
    sortKey: 21,
    featured: false
  },

  {
    _id: 'category_advanced-trading',
    type: 'category',
    name: 'Advanced Trading',
    icon: 'V',
    sortKey: 22,
    featured: false
  },
  {
    _id: 'category_realtime-exchange-data',
    type: 'category',
    name: 'Realtime Exchange Data',
    icon: 'M',
    sortKey: 23,
    featured: false
  },
  {
    _id: 'category_tax-accounting',
    type: 'category',
    name: 'Tax Accounting',
    icon: 'D',
    sortKey: 24,
    featured: false
  },
  {
    _id: 'category_privacy',
    type: 'category',
    name: 'Privacy',
    icon: 'P',
    sortKey: 25,
    featured: false
  },
  {
    _id: 'category_lightning-network',
    type: 'category',
    name: 'Lightning Network',
    icon: 'D',
    sortKey: 26,
    featured: false
  },
  {
    _id: 'category_bitcoin-forks',
    type: 'category',
    name: 'Bitcoin Forks',
    icon: 'M',
    sortKey: 27,
    featured: false
  },
  {
    _id: 'category_crypto-careers',
    type: 'category',
    name: 'Crypto Careers',
    icon: 'S',
    sortKey: 28,
    featured: false
  },
  {
    _id: 'category_crypto-charity',
    type: 'category',
    name: 'Crypto Charity',
    icon: 'R',
    sortKey: 29,
    featured: false
  }
]

const resources = [
  {
    href:
      'https://medium.com/@nik5ter/explain-bitcoin-like-im-five-73b4257ac833',
    title: "Explain Bitcoin Like I'm Five",
    titleWithComment: "Explain Bitcoin Like I'm Five",
    category: 'Getting Started',
    comment: '',
    _id:
      "resource_Explain-Bitcoin-Like-I'm-Fivehttps://medium.com/@nik5ter/explain-bitcoin-like-im-five-73b4257ac833Getting-Started",
    key:
      "Explain-Bitcoin-Like-I'm-Fivehttps://medium.com/@nik5ter/explain-bitcoin-like-im-five-73b4257ac833Getting-Started",
    type: 'resource'
  },
  {
    href: 'https://www.upfolio.com/ultimate-bitcoin-guide',
    title: 'Bitcoin Explained',
    titleWithComment: 'Bitcoin Explained (illustrated guide in simple terms)',
    category: 'Getting Started',
    comment: 'illustrated guide in simple terms',
    _id:
      'resource_Bitcoin-Explained--illustrated-guide-in-simple-terms-https://www.upfolio.com/ultimate-bitcoin-guideGetting-Started',
    key:
      'Bitcoin-Explained--illustrated-guide-in-simple-terms-https://www.upfolio.com/ultimate-bitcoin-guideGetting-Started',
    type: 'resource'
  },
  {
    href: 'pdf/bitcoin.pdf',
    title: 'The Bitcoin Whitepaper',
    titleWithComment: 'The Bitcoin Whitepaper written by Satoshi Nakamoto',
    category: 'Getting Started',
    comment: 'written by Satoshi Nakamoto',
    _id:
      'resource_The-Bitcoin-Whitepaper-written-by-Satoshi-Nakamotopdf/bitcoin.pdfGetting-Started',
    key:
      'The-Bitcoin-Whitepaper-written-by-Satoshi-Nakamotopdf/bitcoin.pdfGetting-Started',
    type: 'resource'
  },
  {
    href: 'http://fermatslibrary.com/s/bitcoin',
    title: 'The Bitcoin Whitepaper',
    titleWithComment: 'The Bitcoin Whitepaper with annotations',
    category: 'Getting Started',
    comment: 'with annotations',
    _id:
      'resource_The-Bitcoin-Whitepaper-with-annotationshttp://fermatslibrary.com/s/bitcoinGetting-Started',
    key:
      'The-Bitcoin-Whitepaper-with-annotationshttp://fermatslibrary.com/s/bitcoinGetting-Started',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=2u2x4T5HfsY',
    title: 'The Bitcoin Whitepaper',
    titleWithComment: 'The Bitcoin Whitepaper read out loud',
    category: 'Getting Started',
    comment: 'read out loud',
    _id:
      'resource_The-Bitcoin-Whitepaper-read-out-loudhttps://www.youtube.com/watch?v=2u2x4T5HfsYGetting-Started',
    key:
      'The-Bitcoin-Whitepaper-read-out-loudhttps://www.youtube.com/watch?v=2u2x4T5HfsYGetting-Started',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=YIVAluSL9SU',
    title: 'The Value of Blockchains',
    titleWithComment: 'The Value of Blockchains',
    category: 'Getting Started',
    comment: '',
    _id:
      'resource_The-Value-of-Blockchainshttps://www.youtube.com/watch?v=YIVAluSL9SUGetting-Started',
    key:
      'The-Value-of-Blockchainshttps://www.youtube.com/watch?v=YIVAluSL9SUGetting-Started',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=t5JGQXCTe3c',
    title: 'How Bitcoin Works (non technical)',
    titleWithComment: 'How Bitcoin Works (non technical) (5 min video)',
    category: 'Getting Started',
    comment: '5 min video',
    _id:
      'resource_How-Bitcoin-Works--non-technical---5-min-video-https://www.youtube.com/watch?v=t5JGQXCTe3cGetting-Started',
    key:
      'How-Bitcoin-Works--non-technical---5-min-video-https://www.youtube.com/watch?v=t5JGQXCTe3cGetting-Started',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=l9jOJk30eQs',
    title: 'How Bitcoin Works (a bit technical)',
    titleWithComment: 'How Bitcoin Works (a bit technical) (5 min video)',
    category: 'Getting Started',
    comment: '5 min video',
    _id:
      'resource_How-Bitcoin-Works--a-bit-technical---5-min-video-https://www.youtube.com/watch?v=l9jOJk30eQsGetting-Started',
    key:
      'How-Bitcoin-Works--a-bit-technical---5-min-video-https://www.youtube.com/watch?v=l9jOJk30eQsGetting-Started',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=bBC-nXj3Ng4',
    title: 'How Bitcoin Works (very technical)',
    titleWithComment: 'How Bitcoin Works (very technical) (26 min video)',
    category: 'Getting Started',
    comment: '26 min video',
    _id:
      'resource_How-Bitcoin-Works--very-technical---26-min-video-https://www.youtube.com/watch?v=bBC-nXj3Ng4Getting-Started',
    key:
      'How-Bitcoin-Works--very-technical---26-min-video-https://www.youtube.com/watch?v=bBC-nXj3Ng4Getting-Started',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=Lx9zgZCMqXE',
    title: 'How Bitcoin Works Under the Hood',
    titleWithComment: 'How Bitcoin Works Under the Hood (22 min video)',
    category: 'Getting Started',
    comment: '22 min video',
    _id:
      'resource_How-Bitcoin-Works-Under-the-Hood--22-min-video-https://www.youtube.com/watch?v=Lx9zgZCMqXEGetting-Started',
    key:
      'How-Bitcoin-Works-Under-the-Hood--22-min-video-https://www.youtube.com/watch?v=Lx9zgZCMqXEGetting-Started',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=JIxwTx7o_B4',
    title: 'Bitcoin 101',
    titleWithComment: 'Bitcoin 101 (Balaji Srinivasan)',
    category: 'Getting Started',
    comment: 'Balaji Srinivasan',
    _id:
      'resource_Bitcoin-101--Balaji-Srinivasan-https://www.youtube.com/watch?v=JIxwTx7o_B4Getting-Started',
    key:
      'Bitcoin-101--Balaji-Srinivasan-https://www.youtube.com/watch?v=JIxwTx7o_B4Getting-Started',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/playlist?list=PLPQwGV1aLnTuN6kdNWlElfr2tzigB9Nnj',
    title: 'Bitcoin for Beginners',
    titleWithComment: 'Bitcoin for Beginners (Andreas Antonopoulos)',
    category: 'Getting Started',
    comment: 'Andreas Antonopoulos',
    _id:
      'resource_Bitcoin-for-Beginners--Andreas-Antonopoulos-https://www.youtube.com/playlist?list=PLPQwGV1aLnTuN6kdNWlElfr2tzigB9NnjGetting-Started',
    key:
      'Bitcoin-for-Beginners--Andreas-Antonopoulos-https://www.youtube.com/playlist?list=PLPQwGV1aLnTuN6kdNWlElfr2tzigB9NnjGetting-Started',
    type: 'resource'
  },
  {
    href: 'http://www.coindesk.com/information/',
    title: "Beginner's Guide to Bitcoin by CoinDesk",
    titleWithComment: "Beginner's Guide to Bitcoin by CoinDesk",
    category: 'Getting Started',
    comment: '',
    _id:
      "resource_Beginner's-Guide-to-Bitcoin-by-CoinDeskhttp://www.coindesk.com/information/Getting-Started",
    key:
      "Beginner's-Guide-to-Bitcoin-by-CoinDeskhttp://www.coindesk.com/information/Getting-Started",
    type: 'resource'
  },
  {
    href: 'http://blog.oleganza.com/post/85111558553/bitcoin-is-like',
    title: 'Bitcoin is Like...',
    titleWithComment: 'Bitcoin is Like...',
    category: 'Getting Started',
    comment: '',
    _id:
      'resource_Bitcoin-is-Like...http://blog.oleganza.com/post/85111558553/bitcoin-is-likeGetting-Started',
    key:
      'Bitcoin-is-Like...http://blog.oleganza.com/post/85111558553/bitcoin-is-likeGetting-Started',
    type: 'resource'
  },
  {
    href: 'https://www.rhymeswithfiat.com',
    title: 'A Bitcoin Webcomic',
    titleWithComment: 'A Bitcoin Webcomic (with educational notes)',
    category: 'Getting Started',
    comment: 'with educational notes',
    _id:
      'resource_A-Bitcoin-Webcomic--with-educational-notes-https://www.rhymeswithfiat.comGetting-Started',
    key:
      'A-Bitcoin-Webcomic--with-educational-notes-https://www.rhymeswithfiat.comGetting-Started',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=ZKwqNgG-Sv4',
    title: 'The Trust Machine: The Story of Bitcoin',
    titleWithComment: 'The Trust Machine: The Story of Bitcoin',
    category: 'Getting Started',
    comment: '',
    _id:
      'resource_The-Trust-Machine:-The-Story-of-Bitcoinhttps://www.youtube.com/watch?v=ZKwqNgG-Sv4Getting-Started',
    key:
      'The-Trust-Machine:-The-Story-of-Bitcoinhttps://www.youtube.com/watch?v=ZKwqNgG-Sv4Getting-Started',
    type: 'resource'
  },
  {
    href: 'http://www.coindesk.com/the-rise-of-the-cypherpunks/',
    title: 'The Rise of the Cypherpunks',
    titleWithComment: 'The Rise of the Cypherpunks',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_The-Rise-of-the-Cypherpunkshttp://www.coindesk.com/the-rise-of-the-cypherpunks/The-History-of-Bitcoin',
    key:
      'The-Rise-of-the-Cypherpunkshttp://www.coindesk.com/the-rise-of-the-cypherpunks/The-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href:
      'https://cacm.acm.org/magazines/2017/12/223058-bitcoins-academic-pedigree/fulltext',
    title: "Bitcoin's Academic Pedigree",
    titleWithComment: "Bitcoin's Academic Pedigree",
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      "resource_Bitcoin's-Academic-Pedigreehttps://cacm.acm.org/magazines/2017/12/223058-bitcoins-academic-pedigree/fulltextThe-History-of-Bitcoin",
    key:
      "Bitcoin's-Academic-Pedigreehttps://cacm.acm.org/magazines/2017/12/223058-bitcoins-academic-pedigree/fulltextThe-History-of-Bitcoin",
    type: 'resource'
  },
  {
    href: 'https://cryptoanarchy.wiki',
    title: 'cryptoanarchy.wiki',
    titleWithComment: 'cryptoanarchy.wiki',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_cryptoanarchy.wikihttps://cryptoanarchy.wikiThe-History-of-Bitcoin',
    key: 'cryptoanarchy.wikihttps://cryptoanarchy.wikiThe-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href: 'http://satoshi.nakamotoinstitute.org/',
    title: 'Complete Writings of Satoshi Nakamoto',
    titleWithComment: 'Complete Writings of Satoshi Nakamoto',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_Complete-Writings-of-Satoshi-Nakamotohttp://satoshi.nakamotoinstitute.org/The-History-of-Bitcoin',
    key:
      'Complete-Writings-of-Satoshi-Nakamotohttp://satoshi.nakamotoinstitute.org/The-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href:
      'https://www.amazon.com/Book-Satoshi-Collected-Writings-Nakamoto/dp/0996061312',
    title: 'The Book of Satoshi',
    titleWithComment: 'The Book of Satoshi',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_The-Book-of-Satoshihttps://www.amazon.com/Book-Satoshi-Collected-Writings-Nakamoto/dp/0996061312The-History-of-Bitcoin',
    key:
      'The-Book-of-Satoshihttps://www.amazon.com/Book-Satoshi-Collected-Writings-Nakamoto/dp/0996061312The-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href:
      'https://www.mail-archive.com/search?l=cryptography%40metzdowd.com&q=subject:%22Bitcoin+P2P+e%5C-cash+paper%22&o=oldest&f=1',
    title: 'Original Announcement Email Thread',
    titleWithComment: 'Original Announcement Email Thread',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_Original-Announcement-Email-Threadhttps://www.mail-archive.com/search?l=cryptography%40metzdowd.com&q=subject:%22Bitcoin+P2P+e%5C-cash+paper%22&o=oldest&f=1The-History-of-Bitcoin',
    key:
      'Original-Announcement-Email-Threadhttps://www.mail-archive.com/search?l=cryptography%40metzdowd.com&q=subject:%22Bitcoin+P2P+e%5C-cash+paper%22&o=oldest&f=1The-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href: 'http://nakamotoinstitute.org/literature/',
    title: 'Historical Literature',
    titleWithComment: 'Historical Literature (work that preceded Bitcoin)',
    category: 'The History of Bitcoin',
    comment: 'work that preceded Bitcoin',
    _id:
      'resource_Historical-Literature--work-that-preceded-Bitcoin-http://nakamotoinstitute.org/literature/The-History-of-Bitcoin',
    key:
      'Historical-Literature--work-that-preceded-Bitcoin-http://nakamotoinstitute.org/literature/The-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href: 'https://www.essaysonbitcoin.com/',
    title: 'Essays on Bitcoin',
    titleWithComment: 'Essays on Bitcoin',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_Essays-on-Bitcoinhttps://www.essaysonbitcoin.com/The-History-of-Bitcoin',
    key:
      'Essays-on-Bitcoinhttps://www.essaysonbitcoin.com/The-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=apYieuvnUaE',
    title: 'History from Cypherpunks to JP Morgan',
    titleWithComment: 'History from Cypherpunks to JP Morgan',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_History-from-Cypherpunks-to-JP-Morganhttps://www.youtube.com/watch?v=apYieuvnUaEThe-History-of-Bitcoin',
    key:
      'History-from-Cypherpunks-to-JP-Morganhttps://www.youtube.com/watch?v=apYieuvnUaEThe-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href:
      'https://www.amazon.com/Digital-Gold-Bitcoin-Millionaires-Reinvent/dp/006236250X',
    title: 'Digital Gold',
    titleWithComment: 'Digital Gold',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_Digital-Goldhttps://www.amazon.com/Digital-Gold-Bitcoin-Millionaires-Reinvent/dp/006236250XThe-History-of-Bitcoin',
    key:
      'Digital-Goldhttps://www.amazon.com/Digital-Gold-Bitcoin-Millionaires-Reinvent/dp/006236250XThe-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href:
      'https://www.amazon.com/Bitcoin-Standard-Sound-Money-Digital/dp/1119473861',
    title: 'The Bitcoin Standard',
    titleWithComment: 'The Bitcoin Standard',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_The-Bitcoin-Standardhttps://www.amazon.com/Bitcoin-Standard-Sound-Money-Digital/dp/1119473861The-History-of-Bitcoin',
    key:
      'The-Bitcoin-Standardhttps://www.amazon.com/Bitcoin-Standard-Sound-Money-Digital/dp/1119473861The-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href:
      'https://www.amazon.com/Age-Cryptocurrency-Bitcoin-Challenging-Economic/dp/1250065631/',
    title: 'The Age of Cryptocurrency',
    titleWithComment: 'The Age of Cryptocurrency',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_The-Age-of-Cryptocurrencyhttps://www.amazon.com/Age-Cryptocurrency-Bitcoin-Challenging-Economic/dp/1250065631/The-History-of-Bitcoin',
    key:
      'The-Age-of-Cryptocurrencyhttps://www.amazon.com/Age-Cryptocurrency-Bitcoin-Challenging-Economic/dp/1250065631/The-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href: 'http://historyofbitcoin.org/',
    title: 'History Timeline',
    titleWithComment: 'History Timeline',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_History-Timelinehttp://historyofbitcoin.org/The-History-of-Bitcoin',
    key: 'History-Timelinehttp://historyofbitcoin.org/The-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href: 'http://diyhpl.us/wiki/transcripts/',
    title: "Bryan Bishop's Bitcoin Event Transcripts",
    titleWithComment: "Bryan Bishop's Bitcoin Event Transcripts",
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      "resource_Bryan-Bishop's-Bitcoin-Event-Transcriptshttp://diyhpl.us/wiki/transcripts/The-History-of-Bitcoin",
    key:
      "Bryan-Bishop's-Bitcoin-Event-Transcriptshttp://diyhpl.us/wiki/transcripts/The-History-of-Bitcoin",
    type: 'resource'
  },
  {
    href: 'https://99bitcoins.com/bitcoinobituaries/',
    title: 'Premature Obituaries',
    titleWithComment: 'Premature Obituaries',
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      'resource_Premature-Obituarieshttps://99bitcoins.com/bitcoinobituaries/The-History-of-Bitcoin',
    key:
      'Premature-Obituarieshttps://99bitcoins.com/bitcoinobituaries/The-History-of-Bitcoin',
    type: 'resource'
  },
  {
    href: 'http://mapofcoins.com/bitcoin',
    title: "Bitcoin's Family Tree",
    titleWithComment: "Bitcoin's Family Tree",
    category: 'The History of Bitcoin',
    comment: '',
    _id:
      "resource_Bitcoin's-Family-Treehttp://mapofcoins.com/bitcoinThe-History-of-Bitcoin",
    key:
      "Bitcoin's-Family-Treehttp://mapofcoins.com/bitcoinThe-History-of-Bitcoin",
    type: 'resource'
  },
  {
    href: 'https://bitcoinmagazine.com/',
    title: 'Bitcoin Magazine',
    titleWithComment: 'Bitcoin Magazine',
    category: 'News Sites',
    comment: '',
    _id: 'resource_Bitcoin-Magazinehttps://bitcoinmagazine.com/News-Sites',
    key: 'Bitcoin-Magazinehttps://bitcoinmagazine.com/News-Sites',
    type: 'resource'
  },
  {
    href: 'http://www.coindesk.com/',
    title: 'Coindesk',
    titleWithComment: 'Coindesk',
    category: 'News Sites',
    comment: '',
    _id: 'resource_Coindeskhttp://www.coindesk.com/News-Sites',
    key: 'Coindeskhttp://www.coindesk.com/News-Sites',
    type: 'resource'
  },
  {
    href: 'http://coinjournal.net/',
    title: 'CoinJournal',
    titleWithComment: 'CoinJournal',
    category: 'News Sites',
    comment: '',
    _id: 'resource_CoinJournalhttp://coinjournal.net/News-Sites',
    key: 'CoinJournalhttp://coinjournal.net/News-Sites',
    type: 'resource'
  },
  {
    href: 'http://www.coininsider.com/',
    title: 'CoinInsider',
    titleWithComment: 'CoinInsider',
    category: 'News Sites',
    comment: '',
    _id: 'resource_CoinInsiderhttp://www.coininsider.com/News-Sites',
    key: 'CoinInsiderhttp://www.coininsider.com/News-Sites',
    type: 'resource'
  },
  {
    href: 'http://cointelegraph.com/',
    title: 'CoinTelegraph',
    titleWithComment: 'CoinTelegraph',
    category: 'News Sites',
    comment: '',
    _id: 'resource_CoinTelegraphhttp://cointelegraph.com/News-Sites',
    key: 'CoinTelegraphhttp://cointelegraph.com/News-Sites',
    type: 'resource'
  },
  {
    href: 'http://cryptoaud.io/',
    title: 'CryptoAud.io',
    titleWithComment: 'CryptoAud.io',
    category: 'News Sites',
    comment: '',
    _id: 'resource_CryptoAud.iohttp://cryptoaud.io/News-Sites',
    key: 'CryptoAud.iohttp://cryptoaud.io/News-Sites',
    type: 'resource'
  },
  {
    href: 'https://news.hodlhodl.com/',
    title: 'Hodl Hodl News',
    titleWithComment: 'Hodl Hodl News',
    category: 'News Sites',
    comment: '',
    _id: 'resource_Hodl-Hodl-Newshttps://news.hodlhodl.com/News-Sites',
    key: 'Hodl-Hodl-Newshttps://news.hodlhodl.com/News-Sites',
    type: 'resource'
  },
  {
    href: 'https://github.com/Xel/Blockchain-stuff#youtube-channels',
    title: 'Epic List of YouTube Channels',
    titleWithComment: 'Epic List of YouTube Channels',
    category: 'Podcasts',
    comment: '',
    _id:
      'resource_Epic-List-of-YouTube-Channelshttps://github.com/Xel/Blockchain-stuff#youtube-channelsPodcasts',
    key:
      'Epic-List-of-YouTube-Channelshttps://github.com/Xel/Blockchain-stuff#youtube-channelsPodcasts',
    type: 'resource'
  },
  {
    href: 'http://badcryptopodcast.com/',
    title: 'Bad Crypto',
    titleWithComment: 'Bad Crypto',
    category: 'Podcasts',
    comment: '',
    _id: 'resource_Bad-Cryptohttp://badcryptopodcast.com/Podcasts',
    key: 'Bad-Cryptohttp://badcryptopodcast.com/Podcasts',
    type: 'resource'
  },
  {
    href: 'http://bitcoinandmarkets.com/',
    title: 'Bitcoin and Markets',
    titleWithComment: 'Bitcoin and Markets',
    category: 'Podcasts',
    comment: '',
    _id: 'resource_Bitcoin-and-Marketshttp://bitcoinandmarkets.com/Podcasts',
    key: 'Bitcoin-and-Marketshttp://bitcoinandmarkets.com/Podcasts',
    type: 'resource'
  },
  {
    href: 'http://www.bitcoin.kn/',
    title: 'Bitcoin Knowledge Podcast',
    titleWithComment: 'Bitcoin Knowledge Podcast',
    category: 'Podcasts',
    comment: '',
    _id: 'resource_Bitcoin-Knowledge-Podcasthttp://www.bitcoin.kn/Podcasts',
    key: 'Bitcoin-Knowledge-Podcasthttp://www.bitcoin.kn/Podcasts',
    type: 'resource'
  },
  {
    href: 'https://citizenbitcoin.simplecast.fm/',
    title: 'Citizen Bitcoin',
    titleWithComment: 'Citizen Bitcoin',
    category: 'Podcasts',
    comment: '',
    _id:
      'resource_Citizen-Bitcoinhttps://citizenbitcoin.simplecast.fm/Podcasts',
    key: 'Citizen-Bitcoinhttps://citizenbitcoin.simplecast.fm/Podcasts',
    type: 'resource'
  },
  {
    href: 'http://crypto101podcast.com/',
    title: 'Crypto 101',
    titleWithComment: 'Crypto 101',
    category: 'Podcasts',
    comment: '',
    _id: 'resource_Crypto-101http://crypto101podcast.com/Podcasts',
    key: 'Crypto-101http://crypto101podcast.com/Podcasts',
    type: 'resource'
  },
  {
    href: 'https://cryptovoices.com/',
    title: 'Crypto Voices',
    titleWithComment: 'Crypto Voices',
    category: 'Podcasts',
    comment: '',
    _id: 'resource_Crypto-Voiceshttps://cryptovoices.com/Podcasts',
    key: 'Crypto-Voiceshttps://cryptovoices.com/Podcasts',
    type: 'resource'
  },
  {
    href: 'https://epicenter.tv/',
    title: 'Epicenter',
    titleWithComment: 'Epicenter',
    category: 'Podcasts',
    comment: '',
    _id: 'resource_Epicenterhttps://epicenter.tv/Podcasts',
    key: 'Epicenterhttps://epicenter.tv/Podcasts',
    type: 'resource'
  },
  {
    href: 'https://letstalkbitcoin.com/',
    title: "Let's Talk Bitcoin",
    titleWithComment: "Let's Talk Bitcoin",
    category: 'Podcasts',
    comment: '',
    _id: "resource_Let's-Talk-Bitcoinhttps://letstalkbitcoin.com/Podcasts",
    key: "Let's-Talk-Bitcoinhttps://letstalkbitcoin.com/Podcasts",
    type: 'resource'
  },
  {
    href: 'https://noded.org/',
    title: 'Noded',
    titleWithComment: 'Noded',
    category: 'Podcasts',
    comment: '',
    _id: 'resource_Nodedhttps://noded.org/Podcasts',
    key: 'Nodedhttps://noded.org/Podcasts',
    type: 'resource'
  },
  {
    href: 'https://talesfromthecrypt.libsyn.com/',
    title: 'Tales from the Crypt',
    titleWithComment: 'Tales from the Crypt',
    category: 'Podcasts',
    comment: '',
    _id:
      'resource_Tales-from-the-Crypthttps://talesfromthecrypt.libsyn.com/Podcasts',
    key: 'Tales-from-the-Crypthttps://talesfromthecrypt.libsyn.com/Podcasts',
    type: 'resource'
  },
  {
    href: 'http://unchainedpodcast.com/',
    title: 'Unchained',
    titleWithComment: 'Unchained',
    category: 'Podcasts',
    comment: '',
    _id: 'resource_Unchainedhttp://unchainedpodcast.com/Podcasts',
    key: 'Unchainedhttp://unchainedpodcast.com/Podcasts',
    type: 'resource'
  },
  {
    href: 'http://unconfirmedpodcast.com/',
    title: 'Unconfirmed',
    titleWithComment: 'Unconfirmed',
    category: 'Podcasts',
    comment: '',
    _id: 'resource_Unconfirmedhttp://unconfirmedpodcast.com/Podcasts',
    key: 'Unconfirmedhttp://unconfirmedpodcast.com/Podcasts',
    type: 'resource'
  },
  {
    href: 'https://www.whatbitcoindid.com/',
    title: 'What Bitcoin Did',
    titleWithComment: 'What Bitcoin Did',
    category: 'Podcasts',
    comment: '',
    _id: 'resource_What-Bitcoin-Didhttps://www.whatbitcoindid.com/Podcasts',
    key: 'What-Bitcoin-Didhttps://www.whatbitcoindid.com/Podcasts',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/user/WorldCryptoNetwork/playlistsrhvtbfnrtdelljfrijjng',
    title: 'World Crypto Network',
    titleWithComment: 'World Crypto Network',
    category: 'Podcasts',
    comment: '',
    _id:
      'resource_World-Crypto-Networkhttps://www.youtube.com/user/WorldCryptoNetwork/playlistsrhvtbfnrtdelljfrijjngPodcasts',
    key:
      'World-Crypto-Networkhttps://www.youtube.com/user/WorldCryptoNetwork/playlistsrhvtbfnrtdelljfrijjngPodcasts',
    type: 'resource'
  },
  {
    href: 'https://www.reddit.com/r/Bitcoin/',
    title: 'Bitcoin Subreddit',
    titleWithComment: 'Bitcoin Subreddit',
    category: 'Discussion Forums',
    comment: '',
    _id:
      'resource_Bitcoin-Subreddithttps://www.reddit.com/r/Bitcoin/Discussion-Forums',
    key: 'Bitcoin-Subreddithttps://www.reddit.com/r/Bitcoin/Discussion-Forums',
    type: 'resource'
  },
  {
    href: 'https://www.reddit.com/r/BitcoinBeginners/',
    title: 'Bitcoin Beginners Subreddit',
    titleWithComment: 'Bitcoin Beginners Subreddit',
    category: 'Discussion Forums',
    comment: '',
    _id:
      'resource_Bitcoin-Beginners-Subreddithttps://www.reddit.com/r/BitcoinBeginners/Discussion-Forums',
    key:
      'Bitcoin-Beginners-Subreddithttps://www.reddit.com/r/BitcoinBeginners/Discussion-Forums',
    type: 'resource'
  },
  {
    href: 'https://webchat.freenode.net/?channels=bitcoin&uio=d4/',
    title: 'Bitcoin IRC Channel',
    titleWithComment: 'Bitcoin IRC Channel',
    category: 'Discussion Forums',
    comment: '',
    _id:
      'resource_Bitcoin-IRC-Channelhttps://webchat.freenode.net/?channels=bitcoin&uio=d4/Discussion-Forums',
    key:
      'Bitcoin-IRC-Channelhttps://webchat.freenode.net/?channels=bitcoin&uio=d4/Discussion-Forums',
    type: 'resource'
  },
  {
    href: 'https://bitcoincoreslack.herokuapp.com/',
    title: 'Bitcoin Core Slack',
    titleWithComment: 'Bitcoin Core Slack',
    category: 'Discussion Forums',
    comment: '',
    _id:
      'resource_Bitcoin-Core-Slackhttps://bitcoincoreslack.herokuapp.com/Discussion-Forums',
    key:
      'Bitcoin-Core-Slackhttps://bitcoincoreslack.herokuapp.com/Discussion-Forums',
    type: 'resource'
  },
  {
    href: 'https://t.me/BitcoinCore',
    title: 'Bitcoin Core Telegram',
    titleWithComment: 'Bitcoin Core Telegram',
    category: 'Discussion Forums',
    comment: '',
    _id:
      'resource_Bitcoin-Core-Telegramhttps://t.me/BitcoinCoreDiscussion-Forums',
    key: 'Bitcoin-Core-Telegramhttps://t.me/BitcoinCoreDiscussion-Forums',
    type: 'resource'
  },
  {
    href: 'https://bitcointalk.org/',
    title: 'Bitcoin Talk Forum',
    titleWithComment: 'Bitcoin Talk Forum',
    category: 'Discussion Forums',
    comment: '',
    _id: 'resource_Bitcoin-Talk-Forumhttps://bitcointalk.org/Discussion-Forums',
    key: 'Bitcoin-Talk-Forumhttps://bitcointalk.org/Discussion-Forums',
    type: 'resource'
  },
  {
    href: 'https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev',
    title: 'Bitcoin Development Mailing List',
    titleWithComment: 'Bitcoin Development Mailing List',
    category: 'Discussion Forums',
    comment: '',
    _id:
      'resource_Bitcoin-Development-Mailing-Listhttps://lists.linuxfoundation.org/mailman/listinfo/bitcoin-devDiscussion-Forums',
    key:
      'Bitcoin-Development-Mailing-Listhttps://lists.linuxfoundation.org/mailman/listinfo/bitcoin-devDiscussion-Forums',
    type: 'resource'
  },
  {
    href: 'http://telegramcryptogroups.com',
    title: 'List of Telegram crypto groups',
    titleWithComment: 'List of Telegram crypto groups',
    category: 'Discussion Forums',
    comment: '',
    _id:
      'resource_List-of-Telegram-crypto-groupshttp://telegramcryptogroups.comDiscussion-Forums',
    key:
      'List-of-Telegram-crypto-groupshttp://telegramcryptogroups.comDiscussion-Forums',
    type: 'resource'
  },
  {
    href: 'https://blockchain.info/charts',
    title: 'Blockchain Charts',
    titleWithComment: 'Blockchain Charts',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      'resource_Blockchain-Chartshttps://blockchain.info/chartsMiscellaneous-Statistics',
    key:
      'Blockchain-Chartshttps://blockchain.info/chartsMiscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://bitcoincharts.com/',
    title: 'Bitcoin Charts',
    titleWithComment: 'Bitcoin Charts',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      'resource_Bitcoin-Chartshttps://bitcoincharts.com/Miscellaneous-Statistics',
    key: 'Bitcoin-Chartshttps://bitcoincharts.com/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://bitcoinvisuals.com/',
    title: 'Bitcoin Visuals',
    titleWithComment: 'Bitcoin Visuals',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      'resource_Bitcoin-Visualshttps://bitcoinvisuals.com/Miscellaneous-Statistics',
    key: 'Bitcoin-Visualshttps://bitcoinvisuals.com/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://bitnodes.earn.com/',
    title: 'Bitcoin Nodes by Country',
    titleWithComment: 'Bitcoin Nodes by Country',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      'resource_Bitcoin-Nodes-by-Countryhttps://bitnodes.earn.com/Miscellaneous-Statistics',
    key:
      'Bitcoin-Nodes-by-Countryhttps://bitnodes.earn.com/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'http://luke.dashjr.org/programs/bitcoin/files/charts/software.html',
    title: 'Non-Listening Node Software Estimates',
    titleWithComment: 'Non-Listening Node Software Estimates',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      'resource_Non-Listening-Node-Software-Estimateshttp://luke.dashjr.org/programs/bitcoin/files/charts/software.htmlMiscellaneous-Statistics',
    key:
      'Non-Listening-Node-Software-Estimateshttp://luke.dashjr.org/programs/bitcoin/files/charts/software.htmlMiscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://coin.dance/stats',
    title: 'Bitcoin demographics & misc stats',
    titleWithComment: 'Bitcoin demographics & misc stats',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      'resource_Bitcoin-demographics-&-misc-statshttps://coin.dance/statsMiscellaneous-Statistics',
    key:
      'Bitcoin-demographics-&-misc-statshttps://coin.dance/statsMiscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://bitcoinprivacy.net/richlist',
    title: 'Bitcoin Richlist',
    titleWithComment: 'Bitcoin Richlist - see the distribution of wealth',
    category: 'Miscellaneous Statistics',
    comment: ' see the distribution of wealth',
    _id:
      'resource_Bitcoin-Richlist---see-the-distribution-of-wealthhttps://bitcoinprivacy.net/richlistMiscellaneous-Statistics',
    key:
      'Bitcoin-Richlist---see-the-distribution-of-wealthhttps://bitcoinprivacy.net/richlistMiscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://data.bitcoinity.org/markets/volume/30d?c=e&t=b',
    title: 'Bitcoinity',
    titleWithComment: 'Bitcoinity - Exchange & Blockchain stats',
    category: 'Miscellaneous Statistics',
    comment: ' Exchange & Blockchain stats',
    _id:
      'resource_Bitcoinity---Exchange-&-Blockchain-statshttps://data.bitcoinity.org/markets/volume/30d?c=e&t=bMiscellaneous-Statistics',
    key:
      'Bitcoinity---Exchange-&-Blockchain-statshttps://data.bitcoinity.org/markets/volume/30d?c=e&t=bMiscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://bitinfocharts.com/cryptocurrency-charts.html',
    title: 'BitInfoCharts',
    titleWithComment: 'BitInfoCharts (Comparison of misc cryptocurrencies)',
    category: 'Miscellaneous Statistics',
    comment: 'Comparison of misc cryptocurrencies',
    _id:
      'resource_BitInfoCharts--Comparison-of-misc-cryptocurrencies-https://bitinfocharts.com/cryptocurrency-charts.htmlMiscellaneous-Statistics',
    key:
      'BitInfoCharts--Comparison-of-misc-cryptocurrencies-https://bitinfocharts.com/cryptocurrency-charts.htmlMiscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://coinmetrics.io/charts/',
    title: 'Coin Metrics',
    titleWithComment: 'Coin Metrics - Open Source Analytics',
    category: 'Miscellaneous Statistics',
    comment: ' Open Source Analytics',
    _id:
      'resource_Coin-Metrics---Open-Source-Analyticshttps://coinmetrics.io/charts/Miscellaneous-Statistics',
    key:
      'Coin-Metrics---Open-Source-Analyticshttps://coinmetrics.io/charts/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://dsn.tm.kit.edu/bitcoin/',
    title: 'DSN Network Stats',
    titleWithComment: 'DSN Network Stats',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      'resource_DSN-Network-Statshttps://dsn.tm.kit.edu/bitcoin/Miscellaneous-Statistics',
    key:
      'DSN-Network-Statshttps://dsn.tm.kit.edu/bitcoin/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://jochen-hoenicke.de/queue/#2h',
    title: "Joehoe's Mempool Size Stats",
    titleWithComment: "Joehoe's Mempool Size Stats",
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      "resource_Joehoe's-Mempool-Size-Statshttps://jochen-hoenicke.de/queue/#2hMiscellaneous-Statistics",
    key:
      "Joehoe's-Mempool-Size-Statshttps://jochen-hoenicke.de/queue/#2hMiscellaneous-Statistics",
    type: 'resource'
  },
  {
    href: 'http://opreturn.org/',
    title: 'OP_RETURN Stats',
    titleWithComment: 'OP_RETURN Stats',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id: 'resource_OP_RETURN-Statshttp://opreturn.org/Miscellaneous-Statistics',
    key: 'OP_RETURN-Statshttp://opreturn.org/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://transactionfee.info/charts/',
    title: 'Payment Stats',
    titleWithComment: 'Payment Stats',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      'resource_Payment-Statshttps://transactionfee.info/charts/Miscellaneous-Statistics',
    key:
      'Payment-Statshttps://transactionfee.info/charts/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://p2sh.info/dashboard/db/home-dashboard?orgId=1',
    title: 'P2SH.info',
    titleWithComment: 'P2SH.info - historical block & transaction stats',
    category: 'Miscellaneous Statistics',
    comment: ' historical block & transaction stats',
    _id:
      'resource_P2SH.info---historical-block-&-transaction-statshttps://p2sh.info/dashboard/db/home-dashboard?orgId=1Miscellaneous-Statistics',
    key:
      'P2SH.info---historical-block-&-transaction-statshttps://p2sh.info/dashboard/db/home-dashboard?orgId=1Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'http://statoshi.info/',
    title: 'Statoshi.info',
    titleWithComment: 'Statoshi.info - realtime Bitcoin node stats',
    category: 'Miscellaneous Statistics',
    comment: ' realtime Bitcoin node stats',
    _id:
      'resource_Statoshi.info---realtime-Bitcoin-node-statshttp://statoshi.info/Miscellaneous-Statistics',
    key:
      'Statoshi.info---realtime-Bitcoin-node-statshttp://statoshi.info/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://tradeblock.com/bitcoin/',
    title: 'TradeBlock',
    titleWithComment: 'TradeBlock - realtime block & mempool stats',
    category: 'Miscellaneous Statistics',
    comment: ' realtime block & mempool stats',
    _id:
      'resource_TradeBlock---realtime-block-&-mempool-statshttps://tradeblock.com/bitcoin/Miscellaneous-Statistics',
    key:
      'TradeBlock---realtime-block-&-mempool-statshttps://tradeblock.com/bitcoin/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://anduck.net/bitcoin/fees/',
    title: 'Transaction fee & UTXO stats',
    titleWithComment: 'Transaction fee & UTXO stats',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      'resource_Transaction-fee-&-UTXO-statshttps://anduck.net/bitcoin/fees/Miscellaneous-Statistics',
    key:
      'Transaction-fee-&-UTXO-statshttps://anduck.net/bitcoin/fees/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://utxo-stats.com/',
    title: 'UTXO Age',
    titleWithComment: 'UTXO Age',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id: 'resource_UTXO-Agehttps://utxo-stats.com/Miscellaneous-Statistics',
    key: 'UTXO-Agehttps://utxo-stats.com/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'http://hodlwave.com/',
    title: 'UTXO Age (HODL Waves)',
    titleWithComment: 'UTXO Age (HODL Waves)',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      'resource_UTXO-Age--HODL-Waves-http://hodlwave.com/Miscellaneous-Statistics',
    key: 'UTXO-Age--HODL-Waves-http://hodlwave.com/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href: 'https://outputs.today/',
    title: 'UTXOs Created Per Day',
    titleWithComment: 'UTXOs Created Per Day',
    category: 'Miscellaneous Statistics',
    comment: '',
    _id:
      'resource_UTXOs-Created-Per-Dayhttps://outputs.today/Miscellaneous-Statistics',
    key: 'UTXOs-Created-Per-Dayhttps://outputs.today/Miscellaneous-Statistics',
    type: 'resource'
  },
  {
    href:
      'https://p2sh.info/dashboard/db/fee-estimation?orgId=1&from=now-7d&to=now',
    title: 'Transaction Fee Estimates',
    titleWithComment: 'Transaction Fee Estimates (many sources)',
    category: 'Transaction Fee Estimates',
    comment: 'many sources',
    _id:
      'resource_Transaction-Fee-Estimates--many-sources-https://p2sh.info/dashboard/db/fee-estimation?orgId=1&from=now-7d&to=nowTransaction-Fee-Estimates',
    key:
      'Transaction-Fee-Estimates--many-sources-https://p2sh.info/dashboard/db/fee-estimation?orgId=1&from=now-7d&to=nowTransaction-Fee-Estimates',
    type: 'resource'
  },
  {
    href: 'http://statoshi.info/dashboard/db/fee-estimates',
    title: 'Bitcoin Core Fee Estimates',
    titleWithComment: 'Bitcoin Core Fee Estimates',
    category: 'Transaction Fee Estimates',
    comment: '',
    _id:
      'resource_Bitcoin-Core-Fee-Estimateshttp://statoshi.info/dashboard/db/fee-estimatesTransaction-Fee-Estimates',
    key:
      'Bitcoin-Core-Fee-Estimateshttp://statoshi.info/dashboard/db/fee-estimatesTransaction-Fee-Estimates',
    type: 'resource'
  },
  {
    href: 'https://bitcoinfees.earn.com/',
    title: 'Earn.com Fee Estimates',
    titleWithComment: 'Earn.com Fee Estimates',
    category: 'Transaction Fee Estimates',
    comment: '',
    _id:
      'resource_Earn.com-Fee-Estimateshttps://bitcoinfees.earn.com/Transaction-Fee-Estimates',
    key:
      'Earn.com-Fee-Estimateshttps://bitcoinfees.earn.com/Transaction-Fee-Estimates',
    type: 'resource'
  },
  {
    href: 'https://estimatesmartfee.com/',
    title: 'Estimate Smart Fee',
    titleWithComment: 'Estimate Smart Fee',
    category: 'Transaction Fee Estimates',
    comment: '',
    _id:
      'resource_Estimate-Smart-Feehttps://estimatesmartfee.com/Transaction-Fee-Estimates',
    key:
      'Estimate-Smart-Feehttps://estimatesmartfee.com/Transaction-Fee-Estimates',
    type: 'resource'
  },
  {
    href: 'https://coinb.in/#fees',
    title: 'Coinbin Fee Estimates',
    titleWithComment: 'Coinbin Fee Estimates',
    category: 'Transaction Fee Estimates',
    comment: '',
    _id:
      'resource_Coinbin-Fee-Estimateshttps://coinb.in/#feesTransaction-Fee-Estimates',
    key: 'Coinbin-Fee-Estimateshttps://coinb.in/#feesTransaction-Fee-Estimates',
    type: 'resource'
  },
  {
    href: 'https://fees.truelevel.io/#/btc',
    title: 'fees.truelevel.io',
    titleWithComment: 'fees.truelevel.io',
    category: 'Transaction Fee Estimates',
    comment: '',
    _id:
      'resource_fees.truelevel.iohttps://fees.truelevel.io/#/btcTransaction-Fee-Estimates',
    key:
      'fees.truelevel.iohttps://fees.truelevel.io/#/btcTransaction-Fee-Estimates',
    type: 'resource'
  },
  {
    href: 'https://whatthefee.io/',
    title: 'Mempool Based Fee Estimates',
    titleWithComment: 'Mempool Based Fee Estimates',
    category: 'Transaction Fee Estimates',
    comment: '',
    _id:
      'resource_Mempool-Based-Fee-Estimateshttps://whatthefee.io/Transaction-Fee-Estimates',
    key:
      'Mempool-Based-Fee-Estimateshttps://whatthefee.io/Transaction-Fee-Estimates',
    type: 'resource'
  },
  {
    href: 'https://transactionfee.info/',
    title: 'Fee Efficiency Checker',
    titleWithComment: 'Fee Efficiency Checker',
    category: 'Transaction Fee Estimates',
    comment: '',
    _id:
      'resource_Fee-Efficiency-Checkerhttps://transactionfee.info/Transaction-Fee-Estimates',
    key:
      'Fee-Efficiency-Checkerhttps://transactionfee.info/Transaction-Fee-Estimates',
    type: 'resource'
  },
  {
    href: 'http://learnmeabitcoin.com/browser/node/',
    title: 'Blockchain Browser and Tutorial',
    titleWithComment: 'Blockchain Browser and Tutorial',
    category: 'Block Explorers',
    comment: '',
    _id:
      'resource_Blockchain-Browser-and-Tutorialhttp://learnmeabitcoin.com/browser/node/Block-Explorers',
    key:
      'Blockchain-Browser-and-Tutorialhttp://learnmeabitcoin.com/browser/node/Block-Explorers',
    type: 'resource'
  },
  {
    href: 'https://blockchain.info/',
    title: 'Blockchain.info',
    titleWithComment: 'Blockchain.info',
    category: 'Block Explorers',
    comment: '',
    _id: 'resource_Blockchain.infohttps://blockchain.info/Block-Explorers',
    key: 'Blockchain.infohttps://blockchain.info/Block-Explorers',
    type: 'resource'
  },
  {
    href: 'https://live.blockcypher.com/btc/',
    title: 'BlockCypher',
    titleWithComment: 'BlockCypher',
    category: 'Block Explorers',
    comment: '',
    _id: 'resource_BlockCypherhttps://live.blockcypher.com/btc/Block-Explorers',
    key: 'BlockCypherhttps://live.blockcypher.com/btc/Block-Explorers',
    type: 'resource'
  },
  {
    href: 'https://www.blocktrail.com/BTC',
    title: 'Blocktrail',
    titleWithComment: 'Blocktrail',
    category: 'Block Explorers',
    comment: '',
    _id: 'resource_Blocktrailhttps://www.blocktrail.com/BTCBlock-Explorers',
    key: 'Blocktrailhttps://www.blocktrail.com/BTCBlock-Explorers',
    type: 'resource'
  },
  {
    href: 'https://oxt.me/',
    title: 'OXT',
    titleWithComment: 'OXT - blockchain explorer + privacy analysis',
    category: 'Block Explorers',
    comment: ' blockchain explorer + privacy analysis',
    _id:
      'resource_OXT---blockchain-explorer-+-privacy-analysishttps://oxt.me/Block-Explorers',
    key:
      'OXT---blockchain-explorer-+-privacy-analysishttps://oxt.me/Block-Explorers',
    type: 'resource'
  },
  {
    href: 'https://blockpath.com/',
    title: 'Blockpath',
    titleWithComment: 'Blockpath Explorer + Addr/Tx Relationships',
    category: 'Block Explorers',
    comment: 'Explorer + Addr/Tx Relationships',
    _id:
      'resource_Blockpath-Explorer-+-Addr/Tx-Relationshipshttps://blockpath.com/Block-Explorers',
    key:
      'Blockpath-Explorer-+-Addr/Tx-Relationshipshttps://blockpath.com/Block-Explorers',
    type: 'resource'
  },
  {
    href: 'https://chain.so/',
    title: 'SoChain',
    titleWithComment: 'SoChain',
    category: 'Block Explorers',
    comment: '',
    _id: 'resource_SoChainhttps://chain.so/Block-Explorers',
    key: 'SoChainhttps://chain.so/Block-Explorers',
    type: 'resource'
  },
  {
    href: 'https://www.walletexplorer.com/',
    title: 'Wallet Explorer',
    titleWithComment: 'Wallet Explorer',
    category: 'Block Explorers',
    comment: '',
    _id:
      'resource_Wallet-Explorerhttps://www.walletexplorer.com/Block-Explorers',
    key: 'Wallet-Explorerhttps://www.walletexplorer.com/Block-Explorers',
    type: 'resource'
  },
  {
    href: 'http://yogh.io/',
    title: 'Yogh.io',
    titleWithComment: 'Yogh.io - raw data block explorer',
    category: 'Block Explorers',
    comment: ' raw data block explorer',
    _id:
      'resource_Yogh.io---raw-data-block-explorerhttp://yogh.io/Block-Explorers',
    key: 'Yogh.io---raw-data-block-explorerhttp://yogh.io/Block-Explorers',
    type: 'resource'
  },
  {
    href: 'http://bitcoincity.info/',
    title: 'Bitcoin City',
    titleWithComment: 'Bitcoin City',
    category: 'Visualizations',
    comment: '',
    _id: 'resource_Bitcoin-Cityhttp://bitcoincity.info/Visualizations',
    key: 'Bitcoin-Cityhttp://bitcoincity.info/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://blocks.wizb.it/#',
    title: 'Blocks & Transactions by Geography',
    titleWithComment: 'Blocks & Transactions by Geography',
    category: 'Visualizations',
    comment: '',
    _id:
      'resource_Blocks-&-Transactions-by-Geographyhttps://blocks.wizb.it/#Visualizations',
    key:
      'Blocks-&-Transactions-by-Geographyhttps://blocks.wizb.it/#Visualizations',
    type: 'resource'
  },
  {
    href: 'http://bitcoinglobe.com/',
    title: 'Bitcoin Globe Transactions',
    titleWithComment: 'Bitcoin Globe Transactions',
    category: 'Visualizations',
    comment: '',
    _id:
      'resource_Bitcoin-Globe-Transactionshttp://bitcoinglobe.com/Visualizations',
    key: 'Bitcoin-Globe-Transactionshttp://bitcoinglobe.com/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://bitbonkers.com/',
    title: 'BitBonkers Blocks & Transactions',
    titleWithComment: 'BitBonkers Blocks & Transactions',
    category: 'Visualizations',
    comment: '',
    _id:
      'resource_BitBonkers-Blocks-&-Transactionshttps://bitbonkers.com/Visualizations',
    key:
      'BitBonkers-Blocks-&-Transactionshttps://bitbonkers.com/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://chainflyer.bitflyer.jp/',
    title: 'Chainflyer Blocks & Transactions',
    titleWithComment: 'Chainflyer Blocks & Transactions',
    category: 'Visualizations',
    comment: '',
    _id:
      'resource_Chainflyer-Blocks-&-Transactionshttps://chainflyer.bitflyer.jp/Visualizations',
    key:
      'Chainflyer-Blocks-&-Transactionshttps://chainflyer.bitflyer.jp/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://bitnodes.earn.com/nodes/live-map/',
    title: 'Live Node Geographic Map',
    titleWithComment: 'Live Node Geographic Map',
    category: 'Visualizations',
    comment: '',
    _id:
      'resource_Live-Node-Geographic-Maphttps://bitnodes.earn.com/nodes/live-map/Visualizations',
    key:
      'Live-Node-Geographic-Maphttps://bitnodes.earn.com/nodes/live-map/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://bitnodes.earn.com/nodes/network-map/',
    title: 'Live Node Network ASN Map',
    titleWithComment: 'Live Node Network ASN Map',
    category: 'Visualizations',
    comment: '',
    _id:
      'resource_Live-Node-Network-ASN-Maphttps://bitnodes.earn.com/nodes/network-map/Visualizations',
    key:
      'Live-Node-Network-ASN-Maphttps://bitnodes.earn.com/nodes/network-map/Visualizations',
    type: 'resource'
  },
  {
    href: 'http://bitforce5.com/',
    title: 'Bitforce5',
    titleWithComment: 'Bitforce5 Transaction Relationships',
    category: 'Visualizations',
    comment: 'Transaction Relationships',
    _id:
      'resource_Bitforce5-Transaction-Relationshipshttp://bitforce5.com/Visualizations',
    key:
      'Bitforce5-Transaction-Relationshipshttp://bitforce5.com/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://dailyblockchain.github.io/',
    title: 'Daily Blockchain',
    titleWithComment: 'Daily Blockchain Transactions Relationships',
    category: 'Visualizations',
    comment: 'Transactions Relationships',
    _id:
      'resource_Daily-Blockchain-Transactions-Relationshipshttps://dailyblockchain.github.io/Visualizations',
    key:
      'Daily-Blockchain-Transactions-Relationshipshttps://dailyblockchain.github.io/Visualizations',
    type: 'resource'
  },
  {
    href: 'http://www.bitlisten.com/',
    title: 'BitListen',
    titleWithComment: 'BitListen - Transactions by Value',
    category: 'Visualizations',
    comment: ' Transactions by Value',
    _id:
      'resource_BitListen---Transactions-by-Valuehttp://www.bitlisten.com/Visualizations',
    key:
      'BitListen---Transactions-by-Valuehttp://www.bitlisten.com/Visualizations',
    type: 'resource'
  },
  {
    href: 'http://visualblockchain.org/',
    title: 'Visual Blockchain',
    titleWithComment: 'Visual Blockchain - Transactions by Coin Age',
    category: 'Visualizations',
    comment: ' Transactions by Coin Age',
    _id:
      'resource_Visual-Blockchain---Transactions-by-Coin-Agehttp://visualblockchain.org/Visualizations',
    key:
      'Visual-Blockchain---Transactions-by-Coin-Agehttp://visualblockchain.org/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://bitcoin-vr.github.io/',
    title: 'Virtual Reality Transactions by Value',
    titleWithComment: 'Virtual Reality Transactions by Value',
    category: 'Visualizations',
    comment: '',
    _id:
      'resource_Virtual-Reality-Transactions-by-Valuehttps://bitcoin-vr.github.io/Visualizations',
    key:
      'Virtual-Reality-Transactions-by-Valuehttps://bitcoin-vr.github.io/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://www.bitcoinmonitor.com/',
    title: 'Bitcoin Monitor',
    titleWithComment: 'Bitcoin Monitor - Transactions by Value',
    category: 'Visualizations',
    comment: ' Transactions by Value',
    _id:
      'resource_Bitcoin-Monitor---Transactions-by-Valuehttps://www.bitcoinmonitor.com/Visualizations',
    key:
      'Bitcoin-Monitor---Transactions-by-Valuehttps://www.bitcoinmonitor.com/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://federalbitcoin.herokuapp.com/',
    title: 'Federal Bitcoin',
    titleWithComment: 'Federal Bitcoin - Transactions by Value',
    category: 'Visualizations',
    comment: ' Transactions by Value',
    _id:
      'resource_Federal-Bitcoin---Transactions-by-Valuehttps://federalbitcoin.herokuapp.com/Visualizations',
    key:
      'Federal-Bitcoin---Transactions-by-Valuehttps://federalbitcoin.herokuapp.com/Visualizations',
    type: 'resource'
  },
  {
    href: 'http://bitcoin.interaqt.nl/',
    title: 'Interaqt',
    titleWithComment: 'Interaqt - Transactions by Value',
    category: 'Visualizations',
    comment: ' Transactions by Value',
    _id:
      'resource_Interaqt---Transactions-by-Valuehttp://bitcoin.interaqt.nl/Visualizations',
    key:
      'Interaqt---Transactions-by-Valuehttp://bitcoin.interaqt.nl/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://bitcoinvisual.herokuapp.com/',
    title: 'Value Visualizer',
    titleWithComment: 'Value Visualizer - Transactions by Value',
    category: 'Visualizations',
    comment: ' Transactions by Value',
    _id:
      'resource_Value-Visualizer---Transactions-by-Valuehttps://bitcoinvisual.herokuapp.com/Visualizations',
    key:
      'Value-Visualizer---Transactions-by-Valuehttps://bitcoinvisual.herokuapp.com/Visualizations',
    type: 'resource'
  },
  {
    href: 'http://fiatleak.com/',
    title: 'Fiat Leak',
    titleWithComment: 'Fiat Leak - Realtime Exchange Flows',
    category: 'Visualizations',
    comment: ' Realtime Exchange Flows',
    _id:
      'resource_Fiat-Leak---Realtime-Exchange-Flowshttp://fiatleak.com/Visualizations',
    key:
      'Fiat-Leak---Realtime-Exchange-Flowshttp://fiatleak.com/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://oxt.me/landscapes',
    title: 'OXT.me Landscapes',
    titleWithComment: 'OXT.me Landscapes',
    category: 'Visualizations',
    comment: '',
    _id: 'resource_OXT.me-Landscapeshttps://oxt.me/landscapesVisualizations',
    key: 'OXT.me-Landscapeshttps://oxt.me/landscapesVisualizations',
    type: 'resource'
  },
  {
    href: 'http://blockchain3d.info',
    title: 'Blockchain 3D Explorer',
    titleWithComment: 'Blockchain 3D Explorer 3D and VR visualizations',
    category: 'Visualizations',
    comment: '3D and VR visualizations',
    _id:
      'resource_Blockchain-3D-Explorer-3D-and-VR-visualizationshttp://blockchain3d.infoVisualizations',
    key:
      'Blockchain-3D-Explorer-3D-and-VR-visualizationshttp://blockchain3d.infoVisualizations',
    type: 'resource'
  },
  {
    href: 'https://iohk.io/',
    title: 'IOHK',
    titleWithComment: 'IOHK - Interactive audiovisual blockchain',
    category: 'Visualizations',
    comment: ' Interactive audiovisual blockchain',
    _id:
      'resource_IOHK---Interactive-audiovisual-blockchainhttps://iohk.io/Visualizations',
    key:
      'IOHK---Interactive-audiovisual-blockchainhttps://iohk.io/Visualizations',
    type: 'resource'
  },
  {
    href: 'https://www.doc.ic.ac.uk/~dmcginn/adjmat.html',
    title: 'Adjacency Matrix Interactive Tool',
    titleWithComment:
      'Adjacency Matrix Interactive Tool - Value Flow Between Block Heights',
    category: 'Visualizations',
    comment: ' Value Flow Between Block Heights',
    _id:
      'resource_Adjacency-Matrix-Interactive-Tool---Value-Flow-Between-Block-Heightshttps://www.doc.ic.ac.uk/~dmcginn/adjmat.htmlVisualizations',
    key:
      'Adjacency-Matrix-Interactive-Tool---Value-Flow-Between-Block-Heightshttps://www.doc.ic.ac.uk/~dmcginn/adjmat.htmlVisualizations',
    type: 'resource'
  },
  {
    href: 'https://www.doc.ic.ac.uk/~dmcginn/old_bitcoin/',
    title: 'Misc transaction visualizations',
    titleWithComment: 'Misc transaction visualizations',
    category: 'Visualizations',
    comment: '',
    _id:
      'resource_Misc-transaction-visualizationshttps://www.doc.ic.ac.uk/~dmcginn/old_bitcoin/Visualizations',
    key:
      'Misc-transaction-visualizationshttps://www.doc.ic.ac.uk/~dmcginn/old_bitcoin/Visualizations',
    type: 'resource'
  },
  {
    href: 'http://forklog.net/bitcoin-mining-past-present-and-future/',
    title: 'The History of Bitcoin Mining',
    titleWithComment: 'The History of Bitcoin Mining',
    category: 'Mining',
    comment: '',
    _id:
      'resource_The-History-of-Bitcoin-Mininghttp://forklog.net/bitcoin-mining-past-present-and-future/Mining',
    key:
      'The-History-of-Bitcoin-Mininghttp://forklog.net/bitcoin-mining-past-present-and-future/Mining',
    type: 'resource'
  },
  {
    href: 'https://qz.com/154877/by-reading-this-page-you-are-mining-bitcoins/',
    title: 'How Bitcoin Mining Works',
    titleWithComment: "How Bitcoin Mining Works (in layman's terms)",
    category: 'Mining',
    comment: "in layman's terms",
    _id:
      "resource_How-Bitcoin-Mining-Works--in-layman's-terms-https://qz.com/154877/by-reading-this-page-you-are-mining-bitcoins/Mining",
    key:
      "How-Bitcoin-Mining-Works--in-layman's-terms-https://qz.com/154877/by-reading-this-page-you-are-mining-bitcoins/Mining",
    type: 'resource'
  },
  {
    href: 'https://www.bitcoinmining.com/',
    title: 'Getting Started Guide',
    titleWithComment: 'Getting Started Guide',
    category: 'Mining',
    comment: '',
    _id: 'resource_Getting-Started-Guidehttps://www.bitcoinmining.com/Mining',
    key: 'Getting-Started-Guidehttps://www.bitcoinmining.com/Mining',
    type: 'resource'
  },
  {
    href: 'https://bitcoinwisdom.com/bitcoin/calculator',
    title: 'Mining Hardware Profitability Calculator',
    titleWithComment: 'Mining Hardware Profitability Calculator',
    category: 'Mining',
    comment: '',
    _id:
      'resource_Mining-Hardware-Profitability-Calculatorhttps://bitcoinwisdom.com/bitcoin/calculatorMining',
    key:
      'Mining-Hardware-Profitability-Calculatorhttps://bitcoinwisdom.com/bitcoin/calculatorMining',
    type: 'resource'
  },
  {
    href: 'https://poolprofit.io/en/',
    title: 'Mining Pool Relative Profitability',
    titleWithComment: 'Mining Pool Relative Profitability',
    category: 'Mining',
    comment: '',
    _id:
      'resource_Mining-Pool-Relative-Profitabilityhttps://poolprofit.io/en/Mining',
    key: 'Mining-Pool-Relative-Profitabilityhttps://poolprofit.io/en/Mining',
    type: 'resource'
  },
  {
    href: 'https://bitcoinwisdom.com/bitcoin/difficulty',
    title: 'Realtime Mining Statistics',
    titleWithComment: 'Realtime Mining Statistics',
    category: 'Mining',
    comment: '',
    _id:
      'resource_Realtime-Mining-Statisticshttps://bitcoinwisdom.com/bitcoin/difficultyMining',
    key:
      'Realtime-Mining-Statisticshttps://bitcoinwisdom.com/bitcoin/difficultyMining',
    type: 'resource'
  },
  {
    href: 'https://www.coinwarz.com/cryptocurrency',
    title: 'Cryptocoin mining relative profitability',
    titleWithComment: 'Cryptocoin mining relative profitability',
    category: 'Mining',
    comment: '',
    _id:
      'resource_Cryptocoin-mining-relative-profitabilityhttps://www.coinwarz.com/cryptocurrencyMining',
    key:
      'Cryptocoin-mining-relative-profitabilityhttps://www.coinwarz.com/cryptocurrencyMining',
    type: 'resource'
  },
  {
    href: 'https://blockchain.info/pools',
    title: 'Mining pool hashrate distribution',
    titleWithComment: 'Mining pool hashrate distribution',
    category: 'Mining',
    comment: '',
    _id:
      'resource_Mining-pool-hashrate-distributionhttps://blockchain.info/poolsMining',
    key: 'Mining-pool-hashrate-distributionhttps://blockchain.info/poolsMining',
    type: 'resource'
  },
  {
    href: 'http://organofcorti.blogspot.co.uk/',
    title: 'Organ of Corti',
    titleWithComment: 'Organ of Corti (mining / network analysis blog)',
    category: 'Mining',
    comment: 'mining / network analysis blog',
    _id:
      'resource_Organ-of-Corti--mining-/-network-analysis-blog-http://organofcorti.blogspot.co.uk/Mining',
    key:
      'Organ-of-Corti--mining-/-network-analysis-blog-http://organofcorti.blogspot.co.uk/Mining',
    type: 'resource'
  },
  {
    href: 'pdf/princeton_bitcoin_book.pdf',
    title: 'Bitcoin & Cryptocurrency Technologies',
    titleWithComment:
      'Bitcoin & Cryptocurrency Technologies (Princeton textbook)',
    category: 'Deep Dive Technical Resources',
    comment: 'Princeton textbook',
    _id:
      'resource_Bitcoin-&-Cryptocurrency-Technologies--Princeton-textbook-pdf/princeton_bitcoin_book.pdfDeep-Dive-Technical-Resources',
    key:
      'Bitcoin-&-Cryptocurrency-Technologies--Princeton-textbook-pdf/princeton_bitcoin_book.pdfDeep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'https://bitcoin.org/en/developer-guide',
    title: 'Bitcoin Developer Guide',
    titleWithComment: 'Bitcoin Developer Guide',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_Bitcoin-Developer-Guidehttps://bitcoin.org/en/developer-guideDeep-Dive-Technical-Resources',
    key:
      'Bitcoin-Developer-Guidehttps://bitcoin.org/en/developer-guideDeep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'https://bitcoinedge.org/tutorials',
    title: 'Bitcoin Edge Workshop',
    titleWithComment: 'Bitcoin Edge Workshop (10 hours of tutorials)',
    category: 'Deep Dive Technical Resources',
    comment: '10 hours of tutorials',
    _id:
      'resource_Bitcoin-Edge-Workshop--10-hours-of-tutorials-https://bitcoinedge.org/tutorialsDeep-Dive-Technical-Resources',
    key:
      'Bitcoin-Edge-Workshop--10-hours-of-tutorials-https://bitcoinedge.org/tutorialsDeep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'http://bitcoin.ninja/',
    title: 'Bitcoin Ninja',
    titleWithComment: 'Bitcoin Ninja',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_Bitcoin-Ninjahttp://bitcoin.ninja/Deep-Dive-Technical-Resources',
    key: 'Bitcoin-Ninjahttp://bitcoin.ninja/Deep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'pdf/Bitcoin_Developer_Reference.pdf',
    title: 'Bitcoin Protocol Reference',
    titleWithComment: 'Bitcoin Protocol Reference',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_Bitcoin-Protocol-Referencepdf/Bitcoin_Developer_Reference.pdfDeep-Dive-Technical-Resources',
    key:
      'Bitcoin-Protocol-Referencepdf/Bitcoin_Developer_Reference.pdfDeep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'https://bitcoin.stackexchange.com/',
    title: 'Bitcoin Stack Exchange',
    titleWithComment: 'Bitcoin Stack Exchange (Technical Q & A)',
    category: 'Deep Dive Technical Resources',
    comment: 'Technical Q & A',
    _id:
      'resource_Bitcoin-Stack-Exchange--Technical-Q-&-A-https://bitcoin.stackexchange.com/Deep-Dive-Technical-Resources',
    key:
      'Bitcoin-Stack-Exchange--Technical-Q-&-A-https://bitcoin.stackexchange.com/Deep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'https://en.bitcoin.it/wiki/Main_Page',
    title: 'The Bitcoin Wiki',
    titleWithComment: 'The Bitcoin Wiki',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_The-Bitcoin-Wikihttps://en.bitcoin.it/wiki/Main_PageDeep-Dive-Technical-Resources',
    key:
      'The-Bitcoin-Wikihttps://en.bitcoin.it/wiki/Main_PageDeep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'https://cdecker.github.io/btcresearch/',
    title: 'Comprehensive Academic Bitcoin Research Archive',
    titleWithComment: 'Comprehensive Academic Bitcoin Research Archive',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_Comprehensive-Academic-Bitcoin-Research-Archivehttps://cdecker.github.io/btcresearch/Deep-Dive-Technical-Resources',
    key:
      'Comprehensive-Academic-Bitcoin-Research-Archivehttps://cdecker.github.io/btcresearch/Deep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href:
      'http://www.michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works/',
    title: 'How the Bitcoin Protocol Actually Works',
    titleWithComment: 'How the Bitcoin Protocol Actually Works',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_How-the-Bitcoin-Protocol-Actually-Workshttp://www.michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works/Deep-Dive-Technical-Resources',
    key:
      'How-the-Bitcoin-Protocol-Actually-Workshttp://www.michaelnielsen.org/ddi/how-the-bitcoin-protocol-actually-works/Deep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href:
      'https://github.com/ChristopherA/Learning-Bitcoin-from-the-Command-Line',
    title: 'Learning Bitcoin from the Command Line',
    titleWithComment: 'Learning Bitcoin from the Command Line',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_Learning-Bitcoin-from-the-Command-Linehttps://github.com/ChristopherA/Learning-Bitcoin-from-the-Command-LineDeep-Dive-Technical-Resources',
    key:
      'Learning-Bitcoin-from-the-Command-Linehttps://github.com/ChristopherA/Learning-Bitcoin-from-the-Command-LineDeep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href:
      'https://github.com/bitcoinbook/bitcoinbook/blob/develop/book.asciidoc',
    title: 'Mastering Bitcoin',
    titleWithComment: 'Mastering Bitcoin',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_Mastering-Bitcoinhttps://github.com/bitcoinbook/bitcoinbook/blob/develop/book.asciidocDeep-Dive-Technical-Resources',
    key:
      'Mastering-Bitcoinhttps://github.com/bitcoinbook/bitcoinbook/blob/develop/book.asciidocDeep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'https://www.manning.com/books/grokking-bitcoin',
    title: 'Grokking Bitcoin',
    titleWithComment: 'Grokking Bitcoin',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_Grokking-Bitcoinhttps://www.manning.com/books/grokking-bitcoinDeep-Dive-Technical-Resources',
    key:
      'Grokking-Bitcoinhttps://www.manning.com/books/grokking-bitcoinDeep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'https://github.com/Xel/Blockchain-stuff#bitcoin',
    title: 'Epic List of Bitcoin Books',
    titleWithComment: 'Epic List of Bitcoin Books',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_Epic-List-of-Bitcoin-Bookshttps://github.com/Xel/Blockchain-stuff#bitcoinDeep-Dive-Technical-Resources',
    key:
      'Epic-List-of-Bitcoin-Bookshttps://github.com/Xel/Blockchain-stuff#bitcoinDeep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'http://davidederosa.com/basic-blockchain-programming/',
    title: 'Intro to Bitcoin for Developers',
    titleWithComment: 'Intro to Bitcoin for Developers',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_Intro-to-Bitcoin-for-Developershttp://davidederosa.com/basic-blockchain-programming/Deep-Dive-Technical-Resources',
    key:
      'Intro-to-Bitcoin-for-Developershttp://davidederosa.com/basic-blockchain-programming/Deep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href:
      'https://programmingblockchain.gitbooks.io/programmingblockchain/content/',
    title: 'Programming the Blockchain in C#',
    titleWithComment: 'Programming the Blockchain in C#',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_Programming-the-Blockchain-in-C#https://programmingblockchain.gitbooks.io/programmingblockchain/content/Deep-Dive-Technical-Resources',
    key:
      'Programming-the-Blockchain-in-C#https://programmingblockchain.gitbooks.io/programmingblockchain/content/Deep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href:
      'http://www.righto.com/2014/02/bitcoins-hard-way-using-raw-bitcoin.html',
    title: 'Using the Raw Bitcoin Protocol',
    titleWithComment: 'Using the Raw Bitcoin Protocol',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_Using-the-Raw-Bitcoin-Protocolhttp://www.righto.com/2014/02/bitcoins-hard-way-using-raw-bitcoin.htmlDeep-Dive-Technical-Resources',
    key:
      'Using-the-Raw-Bitcoin-Protocolhttp://www.righto.com/2014/02/bitcoins-hard-way-using-raw-bitcoin.htmlDeep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'http://www.samlewis.me/2017/06/a-peek-under-bitcoins-hood/',
    title: "A Peek Under Bitcoin's Hood",
    titleWithComment: "A Peek Under Bitcoin's Hood",
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      "resource_A-Peek-Under-Bitcoin's-Hoodhttp://www.samlewis.me/2017/06/a-peek-under-bitcoins-hood/Deep-Dive-Technical-Resources",
    key:
      "A-Peek-Under-Bitcoin's-Hoodhttp://www.samlewis.me/2017/06/a-peek-under-bitcoins-hood/Deep-Dive-Technical-Resources",
    type: 'resource'
  },
  {
    href:
      'https://codesuppository.blogspot.jp/2014/01/how-to-parse-bitcoin-blockchain.html',
    title: 'How to Parse the Bitcoin Blockchain',
    titleWithComment: 'How to Parse the Bitcoin Blockchain',
    category: 'Deep Dive Technical Resources',
    comment: '',
    _id:
      'resource_How-to-Parse-the-Bitcoin-Blockchainhttps://codesuppository.blogspot.jp/2014/01/how-to-parse-bitcoin-blockchain.htmlDeep-Dive-Technical-Resources',
    key:
      'How-to-Parse-the-Bitcoin-Blockchainhttps://codesuppository.blogspot.jp/2014/01/how-to-parse-bitcoin-blockchain.htmlDeep-Dive-Technical-Resources',
    type: 'resource'
  },
  {
    href: 'https://github.com/igorbarinov/awesome-bitcoin',
    title: 'Awesome Extensive Tools List',
    titleWithComment: 'Awesome Extensive Tools List',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_Awesome-Extensive-Tools-Listhttps://github.com/igorbarinov/awesome-bitcoinDeveloper-Tools',
    key:
      'Awesome-Extensive-Tools-Listhttps://github.com/igorbarinov/awesome-bitcoinDeveloper-Tools',
    type: 'resource'
  },
  {
    href: 'https://github.com/citp/BlockSci',
    title: 'BlockSci',
    titleWithComment: 'BlockSci high performance query engine',
    category: 'Developer Tools',
    comment: 'high performance query engine',
    _id:
      'resource_BlockSci-high-performance-query-enginehttps://github.com/citp/BlockSciDeveloper-Tools',
    key:
      'BlockSci-high-performance-query-enginehttps://github.com/citp/BlockSciDeveloper-Tools',
    type: 'resource'
  },
  {
    href: 'https://github.com/btcpayserver/btcpayserver',
    title: 'BTCPay Payment Processor',
    titleWithComment: 'BTCPay Payment Processor',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_BTCPay-Payment-Processorhttps://github.com/btcpayserver/btcpayserverDeveloper-Tools',
    key:
      'BTCPay-Payment-Processorhttps://github.com/btcpayserver/btcpayserverDeveloper-Tools',
    type: 'resource'
  },
  {
    href: 'https://github.com/straumat/blockchain2graph',
    title: 'Bitcoin Graph Database Builder',
    titleWithComment: 'Bitcoin Graph Database Builder',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_Bitcoin-Graph-Database-Builderhttps://github.com/straumat/blockchain2graphDeveloper-Tools',
    key:
      'Bitcoin-Graph-Database-Builderhttps://github.com/straumat/blockchain2graphDeveloper-Tools',
    type: 'resource'
  },
  {
    href: 'https://github.com/bitcoinjs/bitcoinjs-lib',
    title: 'Bitcoin JavaScript Library',
    titleWithComment: 'Bitcoin JavaScript Library',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_Bitcoin-JavaScript-Libraryhttps://github.com/bitcoinjs/bitcoinjs-libDeveloper-Tools',
    key:
      'Bitcoin-JavaScript-Libraryhttps://github.com/bitcoinjs/bitcoinjs-libDeveloper-Tools',
    type: 'resource'
  },
  {
    href: 'https://bitcoinj.github.io/',
    title: 'Bitcoin Java Library',
    titleWithComment: 'Bitcoin Java Library',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_Bitcoin-Java-Libraryhttps://bitcoinj.github.io/Developer-Tools',
    key: 'Bitcoin-Java-Libraryhttps://bitcoinj.github.io/Developer-Tools',
    type: 'resource'
  },
  {
    href: 'https://siminchen.github.io/bitcoinIDE/build/editor.html',
    title: 'Bitcoin Script IDE',
    titleWithComment: 'Bitcoin Script IDE',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_Bitcoin-Script-IDEhttps://siminchen.github.io/bitcoinIDE/build/editor.htmlDeveloper-Tools',
    key:
      'Bitcoin-Script-IDEhttps://siminchen.github.io/bitcoinIDE/build/editor.htmlDeveloper-Tools',
    type: 'resource'
  },
  {
    href: 'https://webbtc.com/script/',
    title: 'Bitcoin Script Debugger',
    titleWithComment: 'Bitcoin Script Debugger',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_Bitcoin-Script-Debuggerhttps://webbtc.com/script/Developer-Tools',
    key: 'Bitcoin-Script-Debuggerhttps://webbtc.com/script/Developer-Tools',
    type: 'resource'
  },
  {
    href: 'https://github.com/kallewoof/btcdeb',
    title: 'Bitcoin Script Debugger 2',
    titleWithComment: 'Bitcoin Script Debugger 2',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_Bitcoin-Script-Debugger-2https://github.com/kallewoof/btcdebDeveloper-Tools',
    key:
      'Bitcoin-Script-Debugger-2https://github.com/kallewoof/btcdebDeveloper-Tools',
    type: 'resource'
  },
  {
    href: 'https://bitcoin-rpc.github.io/',
    title: 'Bitcoin Core RPC Documentation',
    titleWithComment: 'Bitcoin Core RPC Documentation',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_Bitcoin-Core-RPC-Documentationhttps://bitcoin-rpc.github.io/Developer-Tools',
    key:
      'Bitcoin-Core-RPC-Documentationhttps://bitcoin-rpc.github.io/Developer-Tools',
    type: 'resource'
  },
  {
    href: 'https://iancoleman.io/bip39/',
    title: 'HD Key Derivation Tool',
    titleWithComment: 'HD Key Derivation Tool',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_HD-Key-Derivation-Toolhttps://iancoleman.io/bip39/Developer-Tools',
    key: 'HD-Key-Derivation-Toolhttps://iancoleman.io/bip39/Developer-Tools',
    type: 'resource'
  },
  {
    href: 'https://github.com/cryptocoinjs/hdkey',
    title: 'NodeJS HD Key Library',
    titleWithComment: 'NodeJS HD Key Library',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_NodeJS-HD-Key-Libraryhttps://github.com/cryptocoinjs/hdkeyDeveloper-Tools',
    key:
      'NodeJS-HD-Key-Libraryhttps://github.com/cryptocoinjs/hdkeyDeveloper-Tools',
    type: 'resource'
  },
  {
    href: 'https://libbitcoin.org/',
    title: 'Libbitcoin',
    titleWithComment: 'Libbitcoin',
    category: 'Developer Tools',
    comment: '',
    _id: 'resource_Libbitcoinhttps://libbitcoin.org/Developer-Tools',
    key: 'Libbitcoinhttps://libbitcoin.org/Developer-Tools',
    type: 'resource'
  },
  {
    href: 'http://www.omnilayer.org/',
    title: 'Omni Layer',
    titleWithComment: 'Omni Layer',
    category: 'Developer Tools',
    comment: '',
    _id: 'resource_Omni-Layerhttp://www.omnilayer.org/Developer-Tools',
    key: 'Omni-Layerhttp://www.omnilayer.org/Developer-Tools',
    type: 'resource'
  },
  {
    href: 'https://opentimestamps.org/',
    title: 'OpenTimestamps',
    titleWithComment: 'OpenTimestamps',
    category: 'Developer Tools',
    comment: '',
    _id: 'resource_OpenTimestampshttps://opentimestamps.org/Developer-Tools',
    key: 'OpenTimestampshttps://opentimestamps.org/Developer-Tools',
    type: 'resource'
  },
  {
    href: 'https://github.com/samr7/vanitygen',
    title: 'Vanity Address Generator',
    titleWithComment: 'Vanity Address Generator',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_Vanity-Address-Generatorhttps://github.com/samr7/vanitygenDeveloper-Tools',
    key:
      'Vanity-Address-Generatorhttps://github.com/samr7/vanitygenDeveloper-Tools',
    type: 'resource'
  },
  {
    href:
      'https://medium.com/@lopp/how-to-generate-a-custom-bitcoin-address-with-an-amd-gpu-on-ubuntu-f3f10cfdffc6',
    title: 'GPU Vanity Address Generator',
    titleWithComment: 'GPU Vanity Address Generator',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_GPU-Vanity-Address-Generatorhttps://medium.com/@lopp/how-to-generate-a-custom-bitcoin-address-with-an-amd-gpu-on-ubuntu-f3f10cfdffc6Developer-Tools',
    key:
      'GPU-Vanity-Address-Generatorhttps://medium.com/@lopp/how-to-generate-a-custom-bitcoin-address-with-an-amd-gpu-on-ubuntu-f3f10cfdffc6Developer-Tools',
    type: 'resource'
  },
  {
    href: 'https://github.com/gurnec/btcrecover',
    title: 'Wallet Recovery (brute forcing) tool',
    titleWithComment: 'Wallet Recovery (brute forcing) tool',
    category: 'Developer Tools',
    comment: '',
    _id:
      'resource_Wallet-Recovery--brute-forcing--toolhttps://github.com/gurnec/btcrecoverDeveloper-Tools',
    key:
      'Wallet-Recovery--brute-forcing--toolhttps://github.com/gurnec/btcrecoverDeveloper-Tools',
    type: 'resource'
  },
  {
    href: 'http://www.coindesk.com/bitcoins-security-model-deep-dive/',
    title: "Bitcoin's Security Model: A Deep Dive",
    titleWithComment: "Bitcoin's Security Model: A Deep Dive",
    category: 'Security',
    comment: '',
    _id:
      "resource_Bitcoin's-Security-Model:-A-Deep-Divehttp://www.coindesk.com/bitcoins-security-model-deep-dive/Security",
    key:
      "Bitcoin's-Security-Model:-A-Deep-Divehttp://www.coindesk.com/bitcoins-security-model-deep-dive/Security",
    type: 'resource'
  },
  {
    href: 'http://btcthreats.com/',
    title: 'Bitcoin Threat Modeling',
    titleWithComment: 'Bitcoin Threat Modeling',
    category: 'Security',
    comment: '',
    _id: 'resource_Bitcoin-Threat-Modelinghttp://btcthreats.com/Security',
    key: 'Bitcoin-Threat-Modelinghttp://btcthreats.com/Security',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=nYm8ROOSRCk',
    title: 'Bitcoin Security & Storage 101',
    titleWithComment: 'Bitcoin Security & Storage 101 (Pamela Morgan)',
    category: 'Security',
    comment: 'Pamela Morgan',
    _id:
      'resource_Bitcoin-Security-&-Storage-101--Pamela-Morgan-https://www.youtube.com/watch?v=nYm8ROOSRCkSecurity',
    key:
      'Bitcoin-Security-&-Storage-101--Pamela-Morgan-https://www.youtube.com/watch?v=nYm8ROOSRCkSecurity',
    type: 'resource'
  },
  {
    href:
      'https://www.amazon.com/Cryptoasset-Inheritance-Planning-Simple-Owners/dp/1947910116/',
    title: 'Cryptoasset Inheritance Planning',
    titleWithComment: 'Cryptoasset Inheritance Planning (Pamela Morgan)',
    category: 'Security',
    comment: 'Pamela Morgan',
    _id:
      'resource_Cryptoasset-Inheritance-Planning--Pamela-Morgan-https://www.amazon.com/Cryptoasset-Inheritance-Planning-Simple-Owners/dp/1947910116/Security',
    key:
      'Cryptoasset-Inheritance-Planning--Pamela-Morgan-https://www.amazon.com/Cryptoasset-Inheritance-Planning-Simple-Owners/dp/1947910116/Security',
    type: 'resource'
  },
  {
    href: 'http://www.coindesk.com/information/how-to-store-your-bitcoins/',
    title: "Coindesk's Bitcoin Storage Guide",
    titleWithComment: "Coindesk's Bitcoin Storage Guide",
    category: 'Security',
    comment: '',
    _id:
      "resource_Coindesk's-Bitcoin-Storage-Guidehttp://www.coindesk.com/information/how-to-store-your-bitcoins/Security",
    key:
      "Coindesk's-Bitcoin-Storage-Guidehttp://www.coindesk.com/information/how-to-store-your-bitcoins/Security",
    type: 'resource'
  },
  {
    href: 'https://cryptoconsortium.github.io/CCSS/',
    title: 'Cryptocurrency Security Standard',
    titleWithComment: 'Cryptocurrency Security Standard (for enterprises)',
    category: 'Security',
    comment: 'for enterprises',
    _id:
      'resource_Cryptocurrency-Security-Standard--for-enterprises-https://cryptoconsortium.github.io/CCSS/Security',
    key:
      'Cryptocurrency-Security-Standard--for-enterprises-https://cryptoconsortium.github.io/CCSS/Security',
    type: 'resource'
  },
  {
    href: 'https://glacierprotocol.org/',
    title: 'Glacier: A protocol for high security Bitcoin storage',
    titleWithComment: 'Glacier: A protocol for high security Bitcoin storage',
    category: 'Security',
    comment: '',
    _id:
      'resource_Glacier:-A-protocol-for-high-security-Bitcoin-storagehttps://glacierprotocol.org/Security',
    key:
      'Glacier:-A-protocol-for-high-security-Bitcoin-storagehttps://glacierprotocol.org/Security',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=I1uefzJJ6nM',
    title: 'Intro to Paper Wallets & Cold Storage',
    titleWithComment: "Intro to Paper Wallets & Cold Storage (James D'Angelo)",
    category: 'Security',
    comment: "James D'Angelo",
    _id:
      "resource_Intro-to-Paper-Wallets-&-Cold-Storage--James-D'Angelo-https://www.youtube.com/watch?v=I1uefzJJ6nMSecurity",
    key:
      "Intro-to-Paper-Wallets-&-Cold-Storage--James-D'Angelo-https://www.youtube.com/watch?v=I1uefzJJ6nMSecurity",
    type: 'resource'
  },
  {
    href:
      'https://www.deepdotweb.com/jolly-rogers-security-guide-for-beginners/',
    title: "Jolly Roger's Security Guide for Beginners",
    titleWithComment:
      "Jolly Roger's Security Guide for Beginners (online OPSEC)",
    category: 'Security',
    comment: 'online OPSEC',
    _id:
      "resource_Jolly-Roger's-Security-Guide-for-Beginners--online-OPSEC-https://www.deepdotweb.com/jolly-rogers-security-guide-for-beginners/Security",
    key:
      "Jolly-Roger's-Security-Guide-for-Beginners--online-OPSEC-https://www.deepdotweb.com/jolly-rogers-security-guide-for-beginners/Security",
    type: 'resource'
  },
  {
    href: 'https://news.bitcoin.com/idiot-proof-vault-cold-storage-guide/',
    title: 'Paper Wallet Cold Storage Guide',
    titleWithComment: 'Paper Wallet Cold Storage Guide',
    category: 'Security',
    comment: '',
    _id:
      'resource_Paper-Wallet-Cold-Storage-Guidehttps://news.bitcoin.com/idiot-proof-vault-cold-storage-guide/Security',
    key:
      'Paper-Wallet-Cold-Storage-Guidehttps://news.bitcoin.com/idiot-proof-vault-cold-storage-guide/Security',
    type: 'resource'
  },
  {
    href: 'https://bitcoin.org/en/secure-your-wallet',
    title: 'Securing Your Wallet',
    titleWithComment: 'Securing Your Wallet',
    category: 'Security',
    comment: '',
    _id:
      'resource_Securing-Your-Wallethttps://bitcoin.org/en/secure-your-walletSecurity',
    key:
      'Securing-Your-Wallethttps://bitcoin.org/en/secure-your-walletSecurity',
    type: 'resource'
  },
  {
    href:
      'https://medium.com/@lopp/thoughts-on-secure-storage-of-bitcoins-and-other-crypto-assets-210cadabb53d',
    title: 'Thoughts on Secure Storage of Crypto Assets',
    titleWithComment: 'Thoughts on Secure Storage of Crypto Assets',
    category: 'Security',
    comment: '',
    _id:
      'resource_Thoughts-on-Secure-Storage-of-Crypto-Assetshttps://medium.com/@lopp/thoughts-on-secure-storage-of-bitcoins-and-other-crypto-assets-210cadabb53dSecurity',
    key:
      'Thoughts-on-Secure-Storage-of-Crypto-Assetshttps://medium.com/@lopp/thoughts-on-secure-storage-of-bitcoins-and-other-crypto-assets-210cadabb53dSecurity',
    type: 'resource'
  },
  {
    href:
      'https://medium.com/@AudunGulbrands1/the-bitcoin-balance-of-power-poster-91271ab31b86',
    title: "Bitcoin's Balance of Power",
    titleWithComment: "Bitcoin's Balance of Power",
    category: 'Security',
    comment: '',
    _id:
      "resource_Bitcoin's-Balance-of-Powerhttps://medium.com/@AudunGulbrands1/the-bitcoin-balance-of-power-poster-91271ab31b86Security",
    key:
      "Bitcoin's-Balance-of-Powerhttps://medium.com/@AudunGulbrands1/the-bitcoin-balance-of-power-poster-91271ab31b86Security",
    type: 'resource'
  },
  {
    href: 'https://fried.com/crypto-scam-checker/',
    title: 'Crypto Scam Checker',
    titleWithComment: 'Crypto Scam Checker',
    category: 'Security',
    comment: '',
    _id:
      'resource_Crypto-Scam-Checkerhttps://fried.com/crypto-scam-checker/Security',
    key: 'Crypto-Scam-Checkerhttps://fried.com/crypto-scam-checker/Security',
    type: 'resource'
  },
  {
    href:
      'https://github.com/jlopp/physical-bitcoin-attacks/blob/master/README.md',
    title: 'Documented Physical Attacks',
    titleWithComment: 'Documented Physical Attacks',
    category: 'Security',
    comment: '',
    _id:
      'resource_Documented-Physical-Attackshttps://github.com/jlopp/physical-bitcoin-attacks/blob/master/README.mdSecurity',
    key:
      'Documented-Physical-Attackshttps://github.com/jlopp/physical-bitcoin-attacks/blob/master/README.mdSecurity',
    type: 'resource'
  },
  {
    href: 'https://shop.trezor.io',
    title: 'Trezor',
    titleWithComment:
      'Hardware wallet (best security): Trezor or Ledger Nano S',
    category: 'Setting up a Wallet',
    comment: 'e wallet best security: Trezor or Ledger Nano S',
    _id:
      'resource_Hardware-wallet--best-security-:-Trezor-or-Ledger-Nano-Shttps://shop.trezor.ioSetting-up-a-Wallet',
    key:
      'Hardware-wallet--best-security-:-Trezor-or-Ledger-Nano-Shttps://shop.trezor.ioSetting-up-a-Wallet',
    type: 'resource'
  },
  {
    href: 'https://electrum.org/#home',
    title: 'Ledger Nano S',
    titleWithComment: 'Desktop wallet: Electrum',
    category: 'Setting up a Wallet',
    comment: ': Electrum',
    _id:
      'resource_Desktop-wallet:-Electrumhttps://electrum.org/#homeSetting-up-a-Wallet',
    key:
      'Desktop-wallet:-Electrumhttps://electrum.org/#homeSetting-up-a-Wallet',
    type: 'resource'
  },
  {
    href: 'https://play.google.com/store/apps/details?id=com.samourai.wallet',
    title: 'Electrum',
    titleWithComment: 'Android wallet: Samourai Wallet',
    category: 'Setting up a Wallet',
    comment: 'allet: Samourai Wallet',
    _id:
      'resource_Android-wallet:-Samourai-Wallethttps://play.google.com/store/apps/details?id=com.samourai.walletSetting-up-a-Wallet',
    key:
      'Android-wallet:-Samourai-Wallethttps://play.google.com/store/apps/details?id=com.samourai.walletSetting-up-a-Wallet',
    type: 'resource'
  },
  {
    href: 'https://itunes.apple.com/app/id1206035886',
    title: 'Samourai Wallet',
    titleWithComment: 'iPhone wallet: GreenAddress',
    category: 'Setting up a Wallet',
    comment: 'reenAddress',
    _id:
      'resource_iPhone-wallet:-GreenAddresshttps://itunes.apple.com/app/id1206035886Setting-up-a-Wallet',
    key:
      'iPhone-wallet:-GreenAddresshttps://itunes.apple.com/app/id1206035886Setting-up-a-Wallet',
    type: 'resource'
  },
  {
    href: 'https://www.bitgo.com/',
    title: 'GreenAddress',
    titleWithComment: 'Web wallet: BitGo',
    category: 'Setting up a Wallet',
    comment: 'itGo',
    _id: 'resource_Web-wallet:-BitGohttps://www.bitgo.com/Setting-up-a-Wallet',
    key: 'Web-wallet:-BitGohttps://www.bitgo.com/Setting-up-a-Wallet',
    type: 'resource'
  },
  {
    href:
      'https://medium.com/@lopp/securing-your-financial-sovereignty-3af6fe834603',
    title: 'Why Run a Full Node?',
    titleWithComment: 'Why Run a Full Node?',
    category: 'Running a Node',
    comment: '',
    _id:
      'resource_Why-Run-a-Full-Node?https://medium.com/@lopp/securing-your-financial-sovereignty-3af6fe834603Running-a-Node',
    key:
      'Why-Run-a-Full-Node?https://medium.com/@lopp/securing-your-financial-sovereignty-3af6fe834603Running-a-Node',
    type: 'resource'
  },
  {
    href: 'https://bitcoin.org/en/full-node',
    title: 'How to Run a Full Node',
    titleWithComment: 'How to Run a Full Node',
    category: 'Running a Node',
    comment: '',
    _id:
      'resource_How-to-Run-a-Full-Nodehttps://bitcoin.org/en/full-nodeRunning-a-Node',
    key: 'How-to-Run-a-Full-Nodehttps://bitcoin.org/en/full-nodeRunning-a-Node',
    type: 'resource'
  },
  {
    href: 'https://jlopp.github.io/bitcoin-core-config-generator/',
    title: 'Bitcoin Core Config File Generator',
    titleWithComment: 'Bitcoin Core Config File Generator',
    category: 'Running a Node',
    comment: '',
    _id:
      'resource_Bitcoin-Core-Config-File-Generatorhttps://jlopp.github.io/bitcoin-core-config-generator/Running-a-Node',
    key:
      'Bitcoin-Core-Config-File-Generatorhttps://jlopp.github.io/bitcoin-core-config-generator/Running-a-Node',
    type: 'resource'
  },
  {
    href: 'https://bitseed.org/shop/',
    title: 'Bitseed Node Hardware',
    titleWithComment: 'Bitseed Node Hardware',
    category: 'Running a Node',
    comment: '',
    _id:
      'resource_Bitseed-Node-Hardwarehttps://bitseed.org/shop/Running-a-Node',
    key: 'Bitseed-Node-Hardwarehttps://bitseed.org/shop/Running-a-Node',
    type: 'resource'
  },
  {
    href:
      'https://medium.com/@meeDamian/bitcoin-full-node-on-rbp3-revised-88bb7c8ef1d1',
    title: 'Raspberry Pi Node Guide',
    titleWithComment: 'Raspberry Pi Node Guide',
    category: 'Running a Node',
    comment: '',
    _id:
      'resource_Raspberry-Pi-Node-Guidehttps://medium.com/@meeDamian/bitcoin-full-node-on-rbp3-revised-88bb7c8ef1d1Running-a-Node',
    key:
      'Raspberry-Pi-Node-Guidehttps://medium.com/@meeDamian/bitcoin-full-node-on-rbp3-revised-88bb7c8ef1d1Running-a-Node',
    type: 'resource'
  },
  {
    href: 'http://99bitcoins.com/get-started/',
    title: 'Bitcoin Video Course for Non-Technical Newbies',
    titleWithComment: 'Bitcoin Video Course for Non-Technical Newbies',
    category: 'Online Courses',
    comment: '',
    _id:
      'resource_Bitcoin-Video-Course-for-Non-Technical-Newbieshttp://99bitcoins.com/get-started/Online-Courses',
    key:
      'Bitcoin-Video-Course-for-Non-Technical-Newbieshttp://99bitcoins.com/get-started/Online-Courses',
    type: 'resource'
  },
  {
    href: 'https://10daysofbitcoin.com/',
    title: '10 Day Email Course: Basics of Bitcoin',
    titleWithComment: '10 Day Email Course: Basics of Bitcoin',
    category: 'Online Courses',
    comment: '',
    _id:
      'resource_10-Day-Email-Course:-Basics-of-Bitcoinhttps://10daysofbitcoin.com/Online-Courses',
    key:
      '10-Day-Email-Course:-Basics-of-Bitcoinhttps://10daysofbitcoin.com/Online-Courses',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UCNcSSleedtfyDuhBvOQzFzQ/videos',
    title: 'Bitcoin & Cryptocurrency Technologies',
    titleWithComment: 'Bitcoin & Cryptocurrency Technologies (Princeton)',
    category: 'Online Courses',
    comment: 'Princeton',
    _id:
      'resource_Bitcoin-&-Cryptocurrency-Technologies--Princeton-https://www.youtube.com/channel/UCNcSSleedtfyDuhBvOQzFzQ/videosOnline-Courses',
    key:
      'Bitcoin-&-Cryptocurrency-Technologies--Princeton-https://www.youtube.com/channel/UCNcSSleedtfyDuhBvOQzFzQ/videosOnline-Courses',
    type: 'resource'
  },
  {
    href:
      'https://www.udemy.com/bitcoin-or-how-i-learned-to-stop-worrying-and-love-crypto/',
    title: 'In-depth Udemy Course',
    titleWithComment: 'In-depth Udemy Course (over 8 hours of video tutorials)',
    category: 'Online Courses',
    comment: 'over 8 hours of video tutorials',
    _id:
      'resource_In-depth-Udemy-Course--over-8-hours-of-video-tutorials-https://www.udemy.com/bitcoin-or-how-i-learned-to-stop-worrying-and-love-crypto/Online-Courses',
    key:
      'In-depth-Udemy-Course--over-8-hours-of-video-tutorials-https://www.udemy.com/bitcoin-or-how-i-learned-to-stop-worrying-and-love-crypto/Online-Courses',
    type: 'resource'
  },
  {
    href: 'https://www.coursera.org/learn/cryptocurrency',
    title: 'Coursera Cryptocurrency Course',
    titleWithComment:
      'Coursera Cryptocurrency Course (61 videos in 11 sections)',
    category: 'Online Courses',
    comment: '61 videos in 11 sections',
    _id:
      'resource_Coursera-Cryptocurrency-Course--61-videos-in-11-sections-https://www.coursera.org/learn/cryptocurrencyOnline-Courses',
    key:
      'Coursera-Cryptocurrency-Course--61-videos-in-11-sections-https://www.coursera.org/learn/cryptocurrencyOnline-Courses',
    type: 'resource'
  },
  {
    href:
      'https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-what-is-it',
    title: 'Khan Academy Bitcoin Course',
    titleWithComment: 'Khan Academy Bitcoin Course (9 ~10 minute videos)',
    category: 'Online Courses',
    comment: '9 ~10 minute videos',
    _id:
      'resource_Khan-Academy-Bitcoin-Course--9-~10-minute-videos-https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-what-is-itOnline-Courses',
    key:
      'Khan-Academy-Bitcoin-Course--9-~10-minute-videos-https://www.khanacademy.org/economics-finance-domain/core-finance/money-and-banking/bitcoin/v/bitcoin-what-is-itOnline-Courses',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/playlist?list=PLzctEq7iZD-7-DgJM604zsndMapn9ff6q',
    title: 'Bitcoin 101 Blackboard Series',
    titleWithComment: 'Bitcoin 101 Blackboard Series (7+ hours of tutorials)',
    category: 'Online Courses',
    comment: '7+ hours of tutorials',
    _id:
      'resource_Bitcoin-101-Blackboard-Series--7+-hours-of-tutorials-https://www.youtube.com/playlist?list=PLzctEq7iZD-7-DgJM604zsndMapn9ff6qOnline-Courses',
    key:
      'Bitcoin-101-Blackboard-Series--7+-hours-of-tutorials-https://www.youtube.com/playlist?list=PLzctEq7iZD-7-DgJM604zsndMapn9ff6qOnline-Courses',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/watch?v=MJ0OzrkHvXA&list=PLjyTtFk7i2AHvjMo0-ftIVqSNGPcwCaJt',
    title: 'Learn Me A Bitcoin Lessons',
    titleWithComment: 'Learn Me A Bitcoin Lessons',
    category: 'Online Courses',
    comment: '',
    _id:
      'resource_Learn-Me-A-Bitcoin-Lessonshttps://www.youtube.com/watch?v=MJ0OzrkHvXA&list=PLjyTtFk7i2AHvjMo0-ftIVqSNGPcwCaJtOnline-Courses',
    key:
      'Learn-Me-A-Bitcoin-Lessonshttps://www.youtube.com/watch?v=MJ0OzrkHvXA&list=PLjyTtFk7i2AHvjMo0-ftIVqSNGPcwCaJtOnline-Courses',
    type: 'resource'
  },
  {
    href:
      'https://www.pluralsight.com/courses/bitcoin-decentralized-technology',
    title: 'Introduction to Bitcoin',
    titleWithComment: 'Introduction to Bitcoin (create a free trial)',
    category: 'Online Courses',
    comment: 'create a free trial',
    _id:
      'resource_Introduction-to-Bitcoin--create-a-free-trial-https://www.pluralsight.com/courses/bitcoin-decentralized-technologyOnline-Courses',
    key:
      'Introduction-to-Bitcoin--create-a-free-trial-https://www.pluralsight.com/courses/bitcoin-decentralized-technologyOnline-Courses',
    type: 'resource'
  },
  {
    href: 'https://digitalcurrency.unic.ac.cy/free-introductory-mooc/',
    title: 'Introduction to Digital Currency',
    titleWithComment:
      'Introduction to Digital Currency - MOOC offered by University of Nicosia',
    category: 'Online Courses',
    comment: ' MOOC offered by University of Nicosia',
    _id:
      'resource_Introduction-to-Digital-Currency---MOOC-offered-by-University-of-Nicosiahttps://digitalcurrency.unic.ac.cy/free-introductory-mooc/Online-Courses',
    key:
      'Introduction-to-Digital-Currency---MOOC-offered-by-University-of-Nicosiahttps://digitalcurrency.unic.ac.cy/free-introductory-mooc/Online-Courses',
    type: 'resource'
  },
  {
    href: 'https://www.netflix.com/title/80154500',
    title: 'Banking on Bitcoin',
    titleWithComment: 'Banking on Bitcoin',
    category: 'Documentaries',
    comment: '',
    _id:
      'resource_Banking-on-Bitcoinhttps://www.netflix.com/title/80154500Documentaries',
    key:
      'Banking-on-Bitcoinhttps://www.netflix.com/title/80154500Documentaries',
    type: 'resource'
  },
  {
    href: 'http://bitcoinfilm.org/documentaries/',
    title: 'Bitcoin Films',
    titleWithComment: 'Bitcoin Films',
    category: 'Documentaries',
    comment: '',
    _id:
      'resource_Bitcoin-Filmshttp://bitcoinfilm.org/documentaries/Documentaries',
    key: 'Bitcoin-Filmshttp://bitcoinfilm.org/documentaries/Documentaries',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=BrRXP1tp6Kw',
    title: 'Bitcoin in Uganda',
    titleWithComment: 'Bitcoin in Uganda',
    category: 'Documentaries',
    comment: '',
    _id:
      'resource_Bitcoin-in-Ugandahttps://www.youtube.com/watch?v=BrRXP1tp6KwDocumentaries',
    key:
      'Bitcoin-in-Ugandahttps://www.youtube.com/watch?v=BrRXP1tp6KwDocumentaries',
    type: 'resource'
  },
  {
    href: 'https://www.amazon.com/Bitcoin-End-Money-As-Know/dp/B013HU3WX6',
    title: 'Bitcoin: The End of Money as We Know It',
    titleWithComment: 'Bitcoin: The End of Money as We Know It',
    category: 'Documentaries',
    comment: '',
    _id:
      'resource_Bitcoin:-The-End-of-Money-as-We-Know-Ithttps://www.amazon.com/Bitcoin-End-Money-As-Know/dp/B013HU3WX6Documentaries',
    key:
      'Bitcoin:-The-End-of-Money-as-We-Know-Ithttps://www.amazon.com/Bitcoin-End-Money-As-Know/dp/B013HU3WX6Documentaries',
    type: 'resource'
  },
  {
    href: 'http://www.deepwebthemovie.com',
    title: 'Deep Web',
    titleWithComment: 'Deep Web',
    category: 'Documentaries',
    comment: '',
    _id: 'resource_Deep-Webhttp://www.deepwebthemovie.comDocumentaries',
    key: 'Deep-Webhttp://www.deepwebthemovie.comDocumentaries',
    type: 'resource'
  },
  {
    href: 'http://investorfieldguide.com/hashpower/',
    title: 'Hash Power',
    titleWithComment: 'Hash Power',
    category: 'Documentaries',
    comment: '',
    _id:
      'resource_Hash-Powerhttp://investorfieldguide.com/hashpower/Documentaries',
    key: 'Hash-Powerhttp://investorfieldguide.com/hashpower/Documentaries',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=8et6mJ3sKis',
    title: 'Inside Man',
    titleWithComment: 'Inside Man (Morgan Spurlock)',
    category: 'Documentaries',
    comment: 'Morgan Spurlock',
    _id:
      'resource_Inside-Man--Morgan-Spurlock-https://www.youtube.com/watch?v=8et6mJ3sKisDocumentaries',
    key:
      'Inside-Man--Morgan-Spurlock-https://www.youtube.com/watch?v=8et6mJ3sKisDocumentaries',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=K8kua5B5K3I',
    title: 'Life Inside a Secret Chinese Bitcoin Mine',
    titleWithComment: 'Life Inside a Secret Chinese Bitcoin Mine',
    category: 'Documentaries',
    comment: '',
    _id:
      'resource_Life-Inside-a-Secret-Chinese-Bitcoin-Minehttps://www.youtube.com/watch?v=K8kua5B5K3IDocumentaries',
    key:
      'Life-Inside-a-Secret-Chinese-Bitcoin-Minehttps://www.youtube.com/watch?v=K8kua5B5K3IDocumentaries',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=PVo5wCSnmSs',
    title: 'Magic Money: The Bitcoin Revolution',
    titleWithComment: 'Magic Money: The Bitcoin Revolution',
    category: 'Documentaries',
    comment: '',
    _id:
      'resource_Magic-Money:-The-Bitcoin-Revolutionhttps://www.youtube.com/watch?v=PVo5wCSnmSsDocumentaries',
    key:
      'Magic-Money:-The-Bitcoin-Revolutionhttps://www.youtube.com/watch?v=PVo5wCSnmSsDocumentaries',
    type: 'resource'
  },
  {
    href: 'https://vimeo.com/112223859',
    title: 'The Bitcoin Doco 1',
    titleWithComment: 'The Bitcoin Doco 1  & 2',
    category: 'Documentaries',
    comment: ' & 2',
    _id:
      'resource_The-Bitcoin-Doco-1--&-2https://vimeo.com/112223859Documentaries',
    key: 'The-Bitcoin-Doco-1--&-2https://vimeo.com/112223859Documentaries',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=2I6dXRK9oJo',
    title: '& 2',
    titleWithComment: 'The Bitcoin Gospel',
    category: 'Documentaries',
    comment: 'Bitcoin Gospel',
    _id:
      'resource_The-Bitcoin-Gospelhttps://www.youtube.com/watch?v=2I6dXRK9oJoDocumentaries',
    key:
      'The-Bitcoin-Gospelhttps://www.youtube.com/watch?v=2I6dXRK9oJoDocumentaries',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=6pWblf8COH4',
    title: 'The Bitcoin Gospel',
    titleWithComment: 'The Bitcoin Phenomenon',
    category: 'Documentaries',
    comment: 'non',
    _id:
      'resource_The-Bitcoin-Phenomenonhttps://www.youtube.com/watch?v=6pWblf8COH4Documentaries',
    key:
      'The-Bitcoin-Phenomenonhttps://www.youtube.com/watch?v=6pWblf8COH4Documentaries',
    type: 'resource'
  },
  {
    href: 'http://bitcoindoc.com/',
    title: 'The Bitcoin Phenomenon',
    titleWithComment: 'The Rise and Rise of Bitcoin',
    category: 'Documentaries',
    comment: 'tcoin',
    _id:
      'resource_The-Rise-and-Rise-of-Bitcoinhttp://bitcoindoc.com/Documentaries',
    key: 'The-Rise-and-Rise-of-Bitcoinhttp://bitcoindoc.com/Documentaries',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?time_continue=3&v=yQGQXy0RIIo',
    title: 'The Rise and Rise of Bitcoin',
    titleWithComment: 'Ulterior States',
    category: 'Documentaries',
    comment: '',
    _id:
      'resource_Ulterior-Stateshttps://www.youtube.com/watch?time_continue=3&v=yQGQXy0RIIoDocumentaries',
    key:
      'Ulterior-Stateshttps://www.youtube.com/watch?time_continue=3&v=yQGQXy0RIIoDocumentaries',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/playlist?list=PL05dEp7goGNiKWYdiE4nurEPFMmF9XpzF',
    title: 'BitcoinExplainers.com Epic List of Videos',
    titleWithComment: 'BitcoinExplainers.com Epic List of Videos',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_BitcoinExplainers.com-Epic-List-of-Videoshttps://www.youtube.com/playlist?list=PL05dEp7goGNiKWYdiE4nurEPFMmF9XpzFVideo-Presentations',
    key:
      'BitcoinExplainers.com-Epic-List-of-Videoshttps://www.youtube.com/playlist?list=PL05dEp7goGNiKWYdiE4nurEPFMmF9XpzFVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://github.com/Xel/Blockchain-stuff#talks',
    title: 'Another Epic List of YouTube Talks',
    titleWithComment: 'Another Epic List of YouTube Talks',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Another-Epic-List-of-YouTube-Talkshttps://github.com/Xel/Blockchain-stuff#talksVideo-Presentations',
    key:
      'Another-Epic-List-of-YouTube-Talkshttps://github.com/Xel/Blockchain-stuff#talksVideo-Presentations',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/watch?v=DHc81OL_hk4&list=PL3B4UprvrK0P30hJE8ZUiOHJmYypxNriP',
    title: 'Baltic Honeybadger Conference',
    titleWithComment: 'Baltic Honeybadger Conference',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Baltic-Honeybadger-Conferencehttps://www.youtube.com/watch?v=DHc81OL_hk4&list=PL3B4UprvrK0P30hJE8ZUiOHJmYypxNriPVideo-Presentations',
    key:
      'Baltic-Honeybadger-Conferencehttps://www.youtube.com/watch?v=DHc81OL_hk4&list=PL3B4UprvrK0P30hJE8ZUiOHJmYypxNriPVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UCni7PAlyNS0_12H-26DJJ3w/videos',
    title: 'Bitcoin Africa Conference',
    titleWithComment: 'Bitcoin Africa Conference',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Bitcoin-Africa-Conferencehttps://www.youtube.com/channel/UCni7PAlyNS0_12H-26DJJ3w/videosVideo-Presentations',
    key:
      'Bitcoin-Africa-Conferencehttps://www.youtube.com/channel/UCni7PAlyNS0_12H-26DJJ3w/videosVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UC5Q6ilav_fQUdPI1Xwax92Q/videos',
    title: 'Bitcoin Investor Conference',
    titleWithComment: 'Bitcoin Investor Conference',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Bitcoin-Investor-Conferencehttps://www.youtube.com/channel/UC5Q6ilav_fQUdPI1Xwax92Q/videosVideo-Presentations',
    key:
      'Bitcoin-Investor-Conferencehttps://www.youtube.com/channel/UC5Q6ilav_fQUdPI1Xwax92Q/videosVideo-Presentations',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/playlist?list=PLDWyZdgRl406QopZcKUw7HYZd_aQRvMhK',
    title: 'Bitcoin London 2012',
    titleWithComment: 'Bitcoin London 2012',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Bitcoin-London-2012https://www.youtube.com/playlist?list=PLDWyZdgRl406QopZcKUw7HYZd_aQRvMhKVideo-Presentations',
    key:
      'Bitcoin-London-2012https://www.youtube.com/playlist?list=PLDWyZdgRl406QopZcKUw7HYZd_aQRvMhKVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UClTL-ZUsrWuNMP4zy-PWByw/playlists',
    title: 'BPASE',
    titleWithComment: 'BPASE',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_BPASEhttps://www.youtube.com/channel/UClTL-ZUsrWuNMP4zy-PWByw/playlistsVideo-Presentations',
    key:
      'BPASEhttps://www.youtube.com/channel/UClTL-ZUsrWuNMP4zy-PWByw/playlistsVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UCCP7NPTxVrt01-FlSiWYSzQ/videos',
    title: 'Breaking Bitcoin',
    titleWithComment: 'Breaking Bitcoin',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Breaking-Bitcoinhttps://www.youtube.com/channel/UCCP7NPTxVrt01-FlSiWYSzQ/videosVideo-Presentations',
    key:
      'Breaking-Bitcoinhttps://www.youtube.com/channel/UCCP7NPTxVrt01-FlSiWYSzQ/videosVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'http://www.coindesk.com/events/construct-2017/videos/',
    title: 'Construct',
    titleWithComment: 'Construct',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Constructhttp://www.coindesk.com/events/construct-2017/videos/Video-Presentations',
    key:
      'Constructhttp://www.coindesk.com/events/construct-2017/videos/Video-Presentations',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/playlist?list=PL3B4UprvrK0PL2RgS63GL0Ne5l58G_k8W',
    title: 'Cryptolina',
    titleWithComment: 'Cryptolina',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Cryptolinahttps://www.youtube.com/playlist?list=PL3B4UprvrK0PL2RgS63GL0Ne5l58G_k8WVideo-Presentations',
    key:
      'Cryptolinahttps://www.youtube.com/playlist?list=PL3B4UprvrK0PL2RgS63GL0Ne5l58G_k8WVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://bitcointalk.org/index.php?topic=970988.0',
    title: 'Dubai Bitcoin Conference 2015',
    titleWithComment: 'Dubai Bitcoin Conference 2015',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Dubai-Bitcoin-Conference-2015https://bitcointalk.org/index.php?topic=970988.0Video-Presentations',
    key:
      'Dubai-Bitcoin-Conference-2015https://bitcointalk.org/index.php?topic=970988.0Video-Presentations',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UCwZd23Wi1uH5pkvrYcw0WvA',
    title: 'Dutch Blockchain Conference',
    titleWithComment: 'Dutch Blockchain Conference',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Dutch-Blockchain-Conferencehttps://www.youtube.com/channel/UCwZd23Wi1uH5pkvrYcw0WvAVideo-Presentations',
    key:
      'Dutch-Blockchain-Conferencehttps://www.youtube.com/channel/UCwZd23Wi1uH5pkvrYcw0WvAVideo-Presentations',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/playlist?list=PL3B4UprvrK0P6GvaSyaoyJHRijTaV6Dth',
    title: 'European Bitcoin Conference 2011',
    titleWithComment: 'European Bitcoin Conference 2011',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_European-Bitcoin-Conference-2011https://www.youtube.com/playlist?list=PL3B4UprvrK0P6GvaSyaoyJHRijTaV6DthVideo-Presentations',
    key:
      'European-Bitcoin-Conference-2011https://www.youtube.com/playlist?list=PL3B4UprvrK0P6GvaSyaoyJHRijTaV6DthVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/user/MITBitcoinClub/videos',
    title: 'MIT Bitcoin Expo',
    titleWithComment: 'MIT Bitcoin Expo',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_MIT-Bitcoin-Expohttps://www.youtube.com/user/MITBitcoinClub/videosVideo-Presentations',
    key:
      'MIT-Bitcoin-Expohttps://www.youtube.com/user/MITBitcoinClub/videosVideo-Presentations',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/playlist?list=PL4CxcnSy5_bi7_p64hWjVR9OWoJohphvQ',
    title: 'North American Bitcoin Conference 2017',
    titleWithComment: 'North American Bitcoin Conference 2017',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_North-American-Bitcoin-Conference-2017https://www.youtube.com/playlist?list=PL4CxcnSy5_bi7_p64hWjVR9OWoJohphvQVideo-Presentations',
    key:
      'North-American-Bitcoin-Conference-2017https://www.youtube.com/playlist?list=PL4CxcnSy5_bi7_p64hWjVR9OWoJohphvQVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UCfHJ5Y3akQ7LA0PQmSYlYmQ/videos',
    title: 'Paralelni Polis',
    titleWithComment: 'Paralelni Polis',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Paralelni-Polishttps://www.youtube.com/channel/UCfHJ5Y3akQ7LA0PQmSYlYmQ/videosVideo-Presentations',
    key:
      'Paralelni-Polishttps://www.youtube.com/channel/UCfHJ5Y3akQ7LA0PQmSYlYmQ/videosVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UCDUNNUNPAnv2epBYrxYXD_Q/videos',
    title: 'San Jose Bitcoin Conference 2013',
    titleWithComment: 'San Jose Bitcoin Conference 2013',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_San-Jose-Bitcoin-Conference-2013https://www.youtube.com/channel/UCDUNNUNPAnv2epBYrxYXD_Q/videosVideo-Presentations',
    key:
      'San-Jose-Bitcoin-Conference-2013https://www.youtube.com/channel/UCDUNNUNPAnv2epBYrxYXD_Q/videosVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://scalingbitcoin.org/presentations',
    title: 'Scaling Bitcoin Workshop',
    titleWithComment: 'Scaling Bitcoin Workshop',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Scaling-Bitcoin-Workshophttps://scalingbitcoin.org/presentationsVideo-Presentations',
    key:
      'Scaling-Bitcoin-Workshophttps://scalingbitcoin.org/presentationsVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UC5LIx-EmX-f8QIgjFNOjJxw/videos',
    title: 'Texas Bitcoin Conference',
    titleWithComment: 'Texas Bitcoin Conference',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_Texas-Bitcoin-Conferencehttps://www.youtube.com/channel/UC5LIx-EmX-f8QIgjFNOjJxw/videosVideo-Presentations',
    key:
      'Texas-Bitcoin-Conferencehttps://www.youtube.com/channel/UC5LIx-EmX-f8QIgjFNOjJxw/videosVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UCBwksHClcQDU7j9HVnYD7zg',
    title: 'The Atlanta Blockchain Conference',
    titleWithComment: 'The Atlanta Blockchain Conference',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_The-Atlanta-Blockchain-Conferencehttps://www.youtube.com/channel/UCBwksHClcQDU7j9HVnYD7zgVideo-Presentations',
    key:
      'The-Atlanta-Blockchain-Conferencehttps://www.youtube.com/channel/UCBwksHClcQDU7j9HVnYD7zgVideo-Presentations',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/channel/UC8rNDpoPrOjYW8LIzyy9cyw/videos?shelf_id=0&sort=dd&view=0',
    title: 'The Bitcoin Conference 2016',
    titleWithComment: 'The Bitcoin Conference 2016',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_The-Bitcoin-Conference-2016https://www.youtube.com/channel/UC8rNDpoPrOjYW8LIzyy9cyw/videos?shelf_id=0&sort=dd&view=0Video-Presentations',
    key:
      'The-Bitcoin-Conference-2016https://www.youtube.com/channel/UC8rNDpoPrOjYW8LIzyy9cyw/videos?shelf_id=0&sort=dd&view=0Video-Presentations',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UCXmhk-YFo_c5luPzRqr7ViA/videos',
    title: 'The Future of Bitcoin',
    titleWithComment: 'The Future of Bitcoin',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_The-Future-of-Bitcoinhttps://www.youtube.com/channel/UCXmhk-YFo_c5luPzRqr7ViA/videosVideo-Presentations',
    key:
      'The-Future-of-Bitcoinhttps://www.youtube.com/channel/UCXmhk-YFo_c5luPzRqr7ViA/videosVideo-Presentations',
    type: 'resource'
  },
  {
    href:
      'https://www.youtube.com/playlist?list=PL3B4UprvrK0OhxNxac-F_jHKjF_nN4sFA',
    title: "World's First Bitcoin Conference (2011)",
    titleWithComment: "World's First Bitcoin Conference (2011)",
    category: 'Video Presentations',
    comment: '',
    _id:
      "resource_World's-First-Bitcoin-Conference--2011-https://www.youtube.com/playlist?list=PL3B4UprvrK0OhxNxac-F_jHKjF_nN4sFAVideo-Presentations",
    key:
      "World's-First-Bitcoin-Conference--2011-https://www.youtube.com/playlist?list=PL3B4UprvrK0OhxNxac-F_jHKjF_nN4sFAVideo-Presentations",
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg/videos',
    title: 'ZÃ¼rich Bitcoin Meetup Lectures',
    titleWithComment: 'ZÃ¼rich Bitcoin Meetup Lectures',
    category: 'Video Presentations',
    comment: '',
    _id:
      'resource_ZÃ¼rich-Bitcoin-Meetup-Lectureshttps://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg/videosVideo-Presentations',
    key:
      'ZÃ¼rich-Bitcoin-Meetup-Lectureshttps://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg/videosVideo-Presentations',
    type: 'resource'
  },
  {
    href: 'https://twitter.com/lopp/lists/bitcoin',
    title: 'Recommended Bitcoin Twitter Accounts',
    titleWithComment: 'Recommended Bitcoin Twitter Accounts',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Recommended-Bitcoin-Twitter-Accountshttps://twitter.com/lopp/lists/bitcoinHigh-Quality-Blogs',
    key:
      'Recommended-Bitcoin-Twitter-Accountshttps://twitter.com/lopp/lists/bitcoinHigh-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://twitter.com/lopp/lists/bitcoin-developers',
    title: 'Bitcoin Developers on Twitter',
    titleWithComment: 'Bitcoin Developers on Twitter',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Bitcoin-Developers-on-Twitterhttps://twitter.com/lopp/lists/bitcoin-developersHigh-Quality-Blogs',
    key:
      'Bitcoin-Developers-on-Twitterhttps://twitter.com/lopp/lists/bitcoin-developersHigh-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://cryptoinfluencers.io/',
    title: 'Crypto Influencers on Twitter',
    titleWithComment: 'Crypto Influencers on Twitter',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Crypto-Influencers-on-Twitterhttps://cryptoinfluencers.io/High-Quality-Blogs',
    key:
      'Crypto-Influencers-on-Twitterhttps://cryptoinfluencers.io/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://bitcointechtalk.com/',
    title: 'Bitcoin Tech Talk',
    titleWithComment: 'Bitcoin Tech Talk (Various)',
    category: 'High Quality Blogs',
    comment: 'Various',
    _id:
      'resource_Bitcoin-Tech-Talk--Various-https://bitcointechtalk.com/High-Quality-Blogs',
    key:
      'Bitcoin-Tech-Talk--Various-https://bitcointechtalk.com/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://bitcointechweekly.com/',
    title: 'Bitcoin Tech Weekly',
    titleWithComment: 'Bitcoin Tech Weekly',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Bitcoin-Tech-Weeklyhttps://bitcointechweekly.com/High-Quality-Blogs',
    key: 'Bitcoin-Tech-Weeklyhttps://bitcointechweekly.com/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://bitfury.com/docs',
    title: 'BitFury Research',
    titleWithComment: 'BitFury Research',
    category: 'High Quality Blogs',
    comment: '',
    _id: 'resource_BitFury-Researchhttp://bitfury.com/docsHigh-Quality-Blogs',
    key: 'BitFury-Researchhttp://bitfury.com/docsHigh-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://blog.bitmex.com/category/research/?lang=en_us',
    title: 'BitMEX Research',
    titleWithComment: 'BitMEX Research',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_BitMEX-Researchhttps://blog.bitmex.com/category/research/?lang=en_usHigh-Quality-Blogs',
    key:
      'BitMEX-Researchhttps://blog.bitmex.com/category/research/?lang=en_usHigh-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://bitslog.wordpress.com/',
    title: 'Bitslog',
    titleWithComment: 'Bitslog (Sergio Demian Lerner)',
    category: 'High Quality Blogs',
    comment: 'Sergio Demian Lerner',
    _id:
      'resource_Bitslog--Sergio-Demian-Lerner-https://bitslog.wordpress.com/High-Quality-Blogs',
    key:
      'Bitslog--Sergio-Demian-Lerner-https://bitslog.wordpress.com/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://medium.com/@cburniske',
    title: 'Chris Burniske',
    titleWithComment: 'Chris Burniske',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Chris-Burniskehttps://medium.com/@cburniskeHigh-Quality-Blogs',
    key: 'Chris-Burniskehttps://medium.com/@cburniskeHigh-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://thecontrol.co/',
    title: 'The Control',
    titleWithComment: 'The Control (Nick Tomaino)',
    category: 'High Quality Blogs',
    comment: 'Nick Tomaino',
    _id:
      'resource_The-Control--Nick-Tomaino-https://thecontrol.co/High-Quality-Blogs',
    key: 'The-Control--Nick-Tomaino-https://thecontrol.co/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://medium.com/@elombrozo',
    title: 'Eric Lombrozo',
    titleWithComment: 'Eric Lombrozo',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Eric-Lombrozohttps://medium.com/@elombrozoHigh-Quality-Blogs',
    key: 'Eric-Lombrozohttps://medium.com/@elombrozoHigh-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://financialcryptography.com/',
    title: 'Financial Cryptography',
    titleWithComment: 'Financial Cryptography (Ian Grigg)',
    category: 'High Quality Blogs',
    comment: 'Ian Grigg',
    _id:
      'resource_Financial-Cryptography--Ian-Grigg-http://financialcryptography.com/High-Quality-Blogs',
    key:
      'Financial-Cryptography--Ian-Grigg-http://financialcryptography.com/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://avc.com/?s=bitcoin',
    title: 'Fred Wilson',
    titleWithComment: 'Fred Wilson',
    category: 'High Quality Blogs',
    comment: '',
    _id: 'resource_Fred-Wilsonhttp://avc.com/?s=bitcoinHigh-Quality-Blogs',
    key: 'Fred-Wilsonhttp://avc.com/?s=bitcoinHigh-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://freedom-to-tinker.com/tag/bitcoin/',
    title: 'Freedom to Tinker',
    titleWithComment: 'Freedom to Tinker',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Freedom-to-Tinkerhttps://freedom-to-tinker.com/tag/bitcoin/High-Quality-Blogs',
    key:
      'Freedom-to-Tinkerhttps://freedom-to-tinker.com/tag/bitcoin/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://gavinandresen.ninja/',
    title: 'Gavin Andresen',
    titleWithComment: 'Gavin Andresen',
    category: 'High Quality Blogs',
    comment: '',
    _id: 'resource_Gavin-Andresenhttp://gavinandresen.ninja/High-Quality-Blogs',
    key: 'Gavin-Andresenhttp://gavinandresen.ninja/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://hackingdistributed.com/',
    title: 'Hacking, Distributed',
    titleWithComment: 'Hacking, Distributed (Emin GÃ¼n Sirer)',
    category: 'High Quality Blogs',
    comment: 'Emin GÃ¼n Sirer',
    _id:
      'resource_Hacking,-Distributed--Emin-GÃ¼n-Sirer-http://hackingdistributed.com/High-Quality-Blogs',
    key:
      'Hacking,-Distributed--Emin-GÃ¼n-Sirer-http://hackingdistributed.com/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://medium.com/@jimmysong',
    title: 'Jimmy Song',
    titleWithComment: 'Jimmy Song',
    category: 'High Quality Blogs',
    comment: '',
    _id: 'resource_Jimmy-Songhttps://medium.com/@jimmysongHigh-Quality-Blogs',
    key: 'Jimmy-Songhttps://medium.com/@jimmysongHigh-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://jpkoning.blogspot.ca/search/label/bitcoin',
    title: 'JP Koning',
    titleWithComment: 'JP Koning',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_JP-Koninghttps://jpkoning.blogspot.ca/search/label/bitcoinHigh-Quality-Blogs',
    key:
      'JP-Koninghttps://jpkoning.blogspot.ca/search/label/bitcoinHigh-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://bluematt.bitcoin.ninja/',
    title: 'Matt Corallo',
    titleWithComment: 'Matt Corallo',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Matt-Corallohttp://bluematt.bitcoin.ninja/High-Quality-Blogs',
    key: 'Matt-Corallohttp://bluematt.bitcoin.ninja/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://nakamotoinstitute.org/mempool/',
    title: 'The Memory Pool',
    titleWithComment: 'The Memory Pool (Satoshi Nakamoto Institute)',
    category: 'High Quality Blogs',
    comment: 'Satoshi Nakamoto Institute',
    _id:
      'resource_The-Memory-Pool--Satoshi-Nakamoto-Institute-http://nakamotoinstitute.org/mempool/High-Quality-Blogs',
    key:
      'The-Memory-Pool--Satoshi-Nakamoto-Institute-http://nakamotoinstitute.org/mempool/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://moneyandstate.com/',
    title: 'Money and State',
    titleWithComment: 'Money and State (Erik Voorhees)',
    category: 'High Quality Blogs',
    comment: 'Erik Voorhees',
    _id:
      'resource_Money-and-State--Erik-Voorhees-http://moneyandstate.com/High-Quality-Blogs',
    key:
      'Money-and-State--Erik-Voorhees-http://moneyandstate.com/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://medium.com/@nicolasdorier',
    title: 'Nicolas Dorier',
    titleWithComment: 'Nicolas Dorier',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Nicolas-Dorierhttps://medium.com/@nicolasdorierHigh-Quality-Blogs',
    key: 'Nicolas-Dorierhttps://medium.com/@nicolasdorierHigh-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://medium.com/@nopara73',
    title: 'nopara73',
    titleWithComment: 'nopara73',
    category: 'High Quality Blogs',
    comment: '',
    _id: 'resource_nopara73https://medium.com/@nopara73High-Quality-Blogs',
    key: 'nopara73https://medium.com/@nopara73High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://blog.oleganza.com/',
    title: 'Oleg Andreev',
    titleWithComment: 'Oleg Andreev',
    category: 'High Quality Blogs',
    comment: '',
    _id: 'resource_Oleg-Andreevhttp://blog.oleganza.com/High-Quality-Blogs',
    key: 'Oleg-Andreevhttp://blog.oleganza.com/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://petertodd.org/',
    title: 'Peter Todd',
    titleWithComment: 'Peter Todd',
    category: 'High Quality Blogs',
    comment: '',
    _id: 'resource_Peter-Toddhttps://petertodd.org/High-Quality-Blogs',
    key: 'Peter-Toddhttps://petertodd.org/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://gendal.me/tag/bitcoin/',
    title: 'Richard Gendal Brown',
    titleWithComment: 'Richard Gendal Brown',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Richard-Gendal-Brownhttps://gendal.me/tag/bitcoin/High-Quality-Blogs',
    key: 'Richard-Gendal-Brownhttps://gendal.me/tag/bitcoin/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://www.ofnumbers.com/category/bitcoin/',
    title: 'Tim Swanson',
    titleWithComment: 'Tim Swanson',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Tim-Swansonhttp://www.ofnumbers.com/category/bitcoin/High-Quality-Blogs',
    key:
      'Tim-Swansonhttp://www.ofnumbers.com/category/bitcoin/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://www.truthcoin.info/archive/',
    title: 'Truthcoin',
    titleWithComment: 'Truthcoin (Paul Sztorc)',
    category: 'High Quality Blogs',
    comment: 'Paul Sztorc',
    _id:
      'resource_Truthcoin--Paul-Sztorc-http://www.truthcoin.info/archive/High-Quality-Blogs',
    key:
      'Truthcoin--Paul-Sztorc-http://www.truthcoin.info/archive/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://medium.com/@tuurdemeester',
    title: 'Tuur Demeester',
    titleWithComment: 'Tuur Demeester',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Tuur-Demeesterhttps://medium.com/@tuurdemeesterHigh-Quality-Blogs',
    key: 'Tuur-Demeesterhttps://medium.com/@tuurdemeesterHigh-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://unenumerated.blogspot.com/',
    title: 'Unenumerated',
    titleWithComment: 'Unenumerated (Nick Szabo)',
    category: 'High Quality Blogs',
    comment: 'Nick Szabo',
    _id:
      'resource_Unenumerated--Nick-Szabo-http://unenumerated.blogspot.com/High-Quality-Blogs',
    key:
      'Unenumerated--Nick-Szabo-http://unenumerated.blogspot.com/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://vinnylingham.com/',
    title: 'Vinny Lingham',
    titleWithComment: 'Vinny Lingham',
    category: 'High Quality Blogs',
    comment: '',
    _id: 'resource_Vinny-Linghamhttps://vinnylingham.com/High-Quality-Blogs',
    key: 'Vinny-Linghamhttps://vinnylingham.com/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://woobull.com/',
    title: 'Willy Woo',
    titleWithComment: 'Willy Woo',
    category: 'High Quality Blogs',
    comment: '',
    _id: 'resource_Willy-Woohttp://woobull.com/High-Quality-Blogs',
    key: 'Willy-Woohttp://woobull.com/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://laanwj.github.io/',
    title: 'Wladimir van der Laan',
    titleWithComment: 'Wladimir van der Laan',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_Wladimir-van-der-Laanhttps://laanwj.github.io/High-Quality-Blogs',
    key: 'Wladimir-van-der-Laanhttps://laanwj.github.io/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'http://startupmanagement.org/blog/',
    title: 'William Mougayar',
    titleWithComment: 'William Mougayar',
    category: 'High Quality Blogs',
    comment: '',
    _id:
      'resource_William-Mougayarhttp://startupmanagement.org/blog/High-Quality-Blogs',
    key: 'William-Mougayarhttp://startupmanagement.org/blog/High-Quality-Blogs',
    type: 'resource'
  },
  {
    href: 'https://howtobuybitcoins.info/#!/',
    title: 'How to buy bitcoins',
    titleWithComment: 'How to buy bitcoins',
    category: 'Buying Bitcoins',
    comment: '',
    _id:
      'resource_How-to-buy-bitcoinshttps://howtobuybitcoins.info/#!/Buying-Bitcoins',
    key: 'How-to-buy-bitcoinshttps://howtobuybitcoins.info/#!/Buying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://coincentral.com/how-to-buy-bitcoin/',
    title: 'Reviews of Popular Exchanges',
    titleWithComment: 'Reviews of Popular Exchanges',
    category: 'Buying Bitcoins',
    comment: '',
    _id:
      'resource_Reviews-of-Popular-Exchangeshttps://coincentral.com/how-to-buy-bitcoin/Buying-Bitcoins',
    key:
      'Reviews-of-Popular-Exchangeshttps://coincentral.com/how-to-buy-bitcoin/Buying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://unhashed.com/best-bitcoin-cryptocurrency-exchange-reviews/',
    title: 'Comparison of Best Bitcoin Exchanges',
    titleWithComment: 'Comparison of Best Bitcoin Exchanges',
    category: 'Buying Bitcoins',
    comment: '',
    _id:
      'resource_Comparison-of-Best-Bitcoin-Exchangeshttps://unhashed.com/best-bitcoin-cryptocurrency-exchange-reviews/Buying-Bitcoins',
    key:
      'Comparison-of-Best-Bitcoin-Exchangeshttps://unhashed.com/best-bitcoin-cryptocurrency-exchange-reviews/Buying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://github.com/PYMERVAL/decentradexchange/blob/master/README.md',
    title: 'List of Decentralized Exchanges',
    titleWithComment: 'List of Decentralized Exchanges',
    category: 'Buying Bitcoins',
    comment: '',
    _id:
      'resource_List-of-Decentralized-Exchangeshttps://github.com/PYMERVAL/decentradexchange/blob/master/README.mdBuying-Bitcoins',
    key:
      'List-of-Decentralized-Exchangeshttps://github.com/PYMERVAL/decentradexchange/blob/master/README.mdBuying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://bitcoinatmmap.com/',
    title: 'Bitcoin ATM Map',
    titleWithComment: 'Bitcoin ATM Map',
    category: 'Buying Bitcoins',
    comment: '',
    _id: 'resource_Bitcoin-ATM-Maphttps://bitcoinatmmap.com/Buying-Bitcoins',
    key: 'Bitcoin-ATM-Maphttps://bitcoinatmmap.com/Buying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://coinatmradar.com/',
    title: 'Coin ATM Radar',
    titleWithComment: 'Coin ATM Radar',
    category: 'Buying Bitcoins',
    comment: '',
    _id: 'resource_Coin-ATM-Radarhttps://coinatmradar.com/Buying-Bitcoins',
    key: 'Coin-ATM-Radarhttps://coinatmradar.com/Buying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'http://www.findbitcoinatm.com.au/',
    title: 'Australian ATMs',
    titleWithComment: 'Australian ATMs',
    category: 'Buying Bitcoins',
    comment: '',
    _id:
      'resource_Australian-ATMshttp://www.findbitcoinatm.com.au/Buying-Bitcoins',
    key: 'Australian-ATMshttp://www.findbitcoinatm.com.au/Buying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://bisq.network/',
    title: 'Bisq',
    titleWithComment: 'Bisq',
    category: 'Buying Bitcoins',
    comment: '',
    _id: 'resource_Bisqhttps://bisq.network/Buying-Bitcoins',
    key: 'Bisqhttps://bisq.network/Buying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://hodlhodl.com/',
    title: 'Hodl Hodl',
    titleWithComment: 'Hodl Hodl',
    category: 'Buying Bitcoins',
    comment: '',
    _id: 'resource_Hodl-Hodlhttps://hodlhodl.com/Buying-Bitcoins',
    key: 'Hodl-Hodlhttps://hodlhodl.com/Buying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://localbitcoins.com/',
    title: 'Local Bitcoins',
    titleWithComment: 'Local Bitcoins',
    category: 'Buying Bitcoins',
    comment: '',
    _id: 'resource_Local-Bitcoinshttps://localbitcoins.com/Buying-Bitcoins',
    key: 'Local-Bitcoinshttps://localbitcoins.com/Buying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://changelly.com/',
    title: 'Changelly',
    titleWithComment: 'Changelly',
    category: 'Buying Bitcoins',
    comment: '',
    _id: 'resource_Changellyhttps://changelly.com/Buying-Bitcoins',
    key: 'Changellyhttps://changelly.com/Buying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://shapeshift.io/',
    title: 'Shapeshift',
    titleWithComment: 'Shapeshift',
    category: 'Buying Bitcoins',
    comment: '',
    _id: 'resource_Shapeshifthttps://shapeshift.io/Buying-Bitcoins',
    key: 'Shapeshifthttps://shapeshift.io/Buying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://biscoint.io/bitcoin/price-comparison/buy/single-exchange',
    title: 'Realtime Exchange Price Comparison',
    titleWithComment: 'Realtime Exchange Price Comparison',
    category: 'Buying Bitcoins',
    comment: '',
    _id:
      'resource_Realtime-Exchange-Price-Comparisonhttps://biscoint.io/bitcoin/price-comparison/buy/single-exchangeBuying-Bitcoins',
    key:
      'Realtime-Exchange-Price-Comparisonhttps://biscoint.io/bitcoin/price-comparison/buy/single-exchangeBuying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://moonbanking.com',
    title: 'Traditional Bank Ratings',
    titleWithComment: 'Traditional Bank Ratings',
    category: 'Buying Bitcoins',
    comment: '',
    _id:
      'resource_Traditional-Bank-Ratingshttps://moonbanking.comBuying-Bitcoins',
    key: 'Traditional-Bank-Ratingshttps://moonbanking.comBuying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://cryptoradar.co',
    title: 'Helping you to find the best Bitcoin exchange',
    titleWithComment: 'Helping you to find the best Bitcoin exchange',
    category: 'Buying Bitcoins',
    comment: '',
    _id:
      'resource_Helping-you-to-find-the-best-Bitcoin-exchangehttps://cryptoradar.coBuying-Bitcoins',
    key:
      'Helping-you-to-find-the-best-Bitcoin-exchangehttps://cryptoradar.coBuying-Bitcoins',
    type: 'resource'
  },
  {
    href: 'https://www.openbazaar.org/',
    title: 'OpenBazaar: P2P Ecommerce',
    titleWithComment: 'OpenBazaar: P2P Ecommerce',
    category: 'Vendors Accepting Bitcoin',
    comment: '',
    _id:
      'resource_OpenBazaar:-P2P-Ecommercehttps://www.openbazaar.org/Vendors-Accepting-Bitcoin',
    key:
      'OpenBazaar:-P2P-Ecommercehttps://www.openbazaar.org/Vendors-Accepting-Bitcoin',
    type: 'resource'
  },
  {
    href: 'https://airbitz.co/search?term=&location=Current+Location',
    title: 'Airbitz Merchant Directory',
    titleWithComment: 'Airbitz Merchant Directory',
    category: 'Vendors Accepting Bitcoin',
    comment: '',
    _id:
      'resource_Airbitz-Merchant-Directoryhttps://airbitz.co/search?term=&location=Current+LocationVendors-Accepting-Bitcoin',
    key:
      'Airbitz-Merchant-Directoryhttps://airbitz.co/search?term=&location=Current+LocationVendors-Accepting-Bitcoin',
    type: 'resource'
  },
  {
    href: 'http://www.coinmap.org/welcome/',
    title: 'Map of physical stores accepting Bitcoin',
    titleWithComment: 'Map of physical stores accepting Bitcoin',
    category: 'Vendors Accepting Bitcoin',
    comment: '',
    _id:
      'resource_Map-of-physical-stores-accepting-Bitcoinhttp://www.coinmap.org/welcome/Vendors-Accepting-Bitcoin',
    key:
      'Map-of-physical-stores-accepting-Bitcoinhttp://www.coinmap.org/welcome/Vendors-Accepting-Bitcoin',
    type: 'resource'
  },
  {
    href: 'http://usebitcoins.info/',
    title: 'UseBitcoins.info',
    titleWithComment: 'UseBitcoins.info',
    category: 'Vendors Accepting Bitcoin',
    comment: '',
    _id:
      'resource_UseBitcoins.infohttp://usebitcoins.info/Vendors-Accepting-Bitcoin',
    key: 'UseBitcoins.infohttp://usebitcoins.info/Vendors-Accepting-Bitcoin',
    type: 'resource'
  },
  {
    href:
      'https://coinvigilance.com/bitcoin-debit-cards-prepaid-visa-and-mastercard-comparison/',
    title: 'Bitcoin Debit Card Comparison',
    titleWithComment: 'Bitcoin Debit Card Comparison',
    category: 'Vendors Accepting Bitcoin',
    comment: '',
    _id:
      'resource_Bitcoin-Debit-Card-Comparisonhttps://coinvigilance.com/bitcoin-debit-cards-prepaid-visa-and-mastercard-comparison/Vendors-Accepting-Bitcoin',
    key:
      'Bitcoin-Debit-Card-Comparisonhttps://coinvigilance.com/bitcoin-debit-cards-prepaid-visa-and-mastercard-comparison/Vendors-Accepting-Bitcoin',
    type: 'resource'
  },
  {
    href:
      'https://thebitcoin.pub/t/bitcoin-beginners-help-start-here-10-step-guide/27',
    title: "The Bitcoin Pub's video training series",
    titleWithComment: "The Bitcoin Pub's video training series",
    category: 'Advanced Trading',
    comment: '',
    _id:
      "resource_The-Bitcoin-Pub's-video-training-serieshttps://thebitcoin.pub/t/bitcoin-beginners-help-start-here-10-step-guide/27Advanced-Trading",
    key:
      "The-Bitcoin-Pub's-video-training-serieshttps://thebitcoin.pub/t/bitcoin-beginners-help-start-here-10-step-guide/27Advanced-Trading",
    type: 'resource'
  },
  {
    href:
      'https://alunacrypto.blogspot.sg/2016/03/bitcoin-altcoins-trading-complete-guide-cryptocurrency-tutorial-trading-strategy-fundamental-analysis-technical-analysis.html',
    title: 'Intro to Crypto Trading',
    titleWithComment: 'Intro to Crypto Trading',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_Intro-to-Crypto-Tradinghttps://alunacrypto.blogspot.sg/2016/03/bitcoin-altcoins-trading-complete-guide-cryptocurrency-tutorial-trading-strategy-fundamental-analysis-technical-analysis.htmlAdvanced-Trading',
    key:
      'Intro-to-Crypto-Tradinghttps://alunacrypto.blogspot.sg/2016/03/bitcoin-altcoins-trading-complete-guide-cryptocurrency-tutorial-trading-strategy-fundamental-analysis-technical-analysis.htmlAdvanced-Trading',
    type: 'resource'
  },
  {
    href:
      'https://hackernoon.com/all-you-need-to-know-about-cryptocurrencies-an-overview-for-the-savvy-investor-bdc035b14982',
    title: 'An Overview of Cryptocurrencies for the Savvy Investor',
    titleWithComment: 'An Overview of Cryptocurrencies for the Savvy Investor',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_An-Overview-of-Cryptocurrencies-for-the-Savvy-Investorhttps://hackernoon.com/all-you-need-to-know-about-cryptocurrencies-an-overview-for-the-savvy-investor-bdc035b14982Advanced-Trading',
    key:
      'An-Overview-of-Cryptocurrencies-for-the-Savvy-Investorhttps://hackernoon.com/all-you-need-to-know-about-cryptocurrencies-an-overview-for-the-savvy-investor-bdc035b14982Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://www.cryptocompare.com/',
    title: 'Comparisons of coins, exchanges, wallets',
    titleWithComment: 'Comparisons of coins, exchanges, wallets',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_Comparisons-of-coins,-exchanges,-walletshttps://www.cryptocompare.com/Advanced-Trading',
    key:
      'Comparisons-of-coins,-exchanges,-walletshttps://www.cryptocompare.com/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://www.coingecko.com/en',
    title: 'CoinGecko coin statistics',
    titleWithComment: 'CoinGecko coin statistics',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_CoinGecko-coin-statisticshttps://www.coingecko.com/enAdvanced-Trading',
    key:
      'CoinGecko-coin-statisticshttps://www.coingecko.com/enAdvanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://bitinfocharts.com/',
    title: 'BitInfoCharts coin statistics',
    titleWithComment: 'BitInfoCharts coin statistics',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_BitInfoCharts-coin-statisticshttps://bitinfocharts.com/Advanced-Trading',
    key:
      'BitInfoCharts-coin-statisticshttps://bitinfocharts.com/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://www.reddit.com/r/BitcoinMarkets/',
    title: 'BitcoinMarkets Reddit community',
    titleWithComment: 'BitcoinMarkets Reddit community',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_BitcoinMarkets-Reddit-communityhttps://www.reddit.com/r/BitcoinMarkets/Advanced-Trading',
    key:
      'BitcoinMarkets-Reddit-communityhttps://www.reddit.com/r/BitcoinMarkets/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://coinsight.org/flairgame',
    title: 'BitcoinMarkets flair stats',
    titleWithComment: 'BitcoinMarkets flair stats',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_BitcoinMarkets-flair-statshttps://coinsight.org/flairgameAdvanced-Trading',
    key:
      'BitcoinMarkets-flair-statshttps://coinsight.org/flairgameAdvanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://chatwithtraders.com/ep-134-btcvix/',
    title: 'Podcast: Magic Internet Money',
    titleWithComment: 'Podcast: Magic Internet Money',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_Podcast:-Magic-Internet-Moneyhttps://chatwithtraders.com/ep-134-btcvix/Advanced-Trading',
    key:
      'Podcast:-Magic-Internet-Moneyhttps://chatwithtraders.com/ep-134-btcvix/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://chatwithtraders.com/ep-053-btcvix/',
    title: 'Podcast: BTCVIX',
    titleWithComment: 'Podcast: BTCVIX',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_Podcast:-BTCVIXhttps://chatwithtraders.com/ep-053-btcvix/Advanced-Trading',
    key:
      'Podcast:-BTCVIXhttps://chatwithtraders.com/ep-053-btcvix/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://www.sifrdata.com/',
    title: 'Sifr Data - Financial Analytics',
    titleWithComment: 'Sifr Data - Financial Analytics',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_Sifr-Data---Financial-Analyticshttps://www.sifrdata.com/Advanced-Trading',
    key:
      'Sifr-Data---Financial-Analyticshttps://www.sifrdata.com/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://cointrading.ninja/sentiment',
    title: 'Twitter Mention Stats',
    titleWithComment: 'Twitter Mention Stats',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_Twitter-Mention-Statshttps://cointrading.ninja/sentimentAdvanced-Trading',
    key:
      'Twitter-Mention-Statshttps://cointrading.ninja/sentimentAdvanced-Trading',
    type: 'resource'
  },
  {
    href: 'http://www.sygnals.io/',
    title: 'Realtime Twitter Sentiment',
    titleWithComment: 'Realtime Twitter Sentiment',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_Realtime-Twitter-Sentimenthttp://www.sygnals.io/Advanced-Trading',
    key: 'Realtime-Twitter-Sentimenthttp://www.sygnals.io/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://www.tradingview.com/markets/cryptocurrencies/',
    title: 'TradingView',
    titleWithComment: 'TradingView',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_TradingViewhttps://www.tradingview.com/markets/cryptocurrencies/Advanced-Trading',
    key:
      'TradingViewhttps://www.tradingview.com/markets/cryptocurrencies/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://www.altcoinfantasy.com',
    title: 'Altcoin Fantasy - Crypto Fantasy Trading Platform',
    titleWithComment: 'Altcoin Fantasy - Crypto Fantasy Trading Platform',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_Altcoin-Fantasy---Crypto-Fantasy-Trading-Platformhttps://www.altcoinfantasy.comAdvanced-Trading',
    key:
      'Altcoin-Fantasy---Crypto-Fantasy-Trading-Platformhttps://www.altcoinfantasy.comAdvanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://bitcoinflip.app/',
    title: 'Crypto trading simulator',
    titleWithComment: 'Crypto trading simulator',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_Crypto-trading-simulatorhttps://bitcoinflip.app/Advanced-Trading',
    key: 'Crypto-trading-simulatorhttps://bitcoinflip.app/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'http://btcvol.info',
    title: 'Volatility Index',
    titleWithComment: 'Volatility Index',
    category: 'Advanced Trading',
    comment: '',
    _id: 'resource_Volatility-Indexhttp://btcvol.infoAdvanced-Trading',
    key: 'Volatility-Indexhttp://btcvol.infoAdvanced-Trading',
    type: 'resource'
  },
  {
    href: 'http://whalecalls.io',
    title: 'Whale Calls - large market movements',
    titleWithComment: 'Whale Calls - large market movements',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_Whale-Calls---large-market-movementshttp://whalecalls.ioAdvanced-Trading',
    key:
      'Whale-Calls---large-market-movementshttp://whalecalls.ioAdvanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://www.whalepool.io/',
    title: 'WhalePool trading community',
    titleWithComment: 'WhalePool trading community',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_WhalePool-trading-communityhttps://www.whalepool.io/Advanced-Trading',
    key: 'WhalePool-trading-communityhttps://www.whalepool.io/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'http://telegram.whaleclub.io/',
    title: 'Whaleclub Telegram community',
    titleWithComment: 'Whaleclub Telegram community',
    category: 'Advanced Trading',
    comment: '',
    _id:
      'resource_Whaleclub-Telegram-communityhttp://telegram.whaleclub.io/Advanced-Trading',
    key:
      'Whaleclub-Telegram-communityhttp://telegram.whaleclub.io/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'http://charts.woobull.com/',
    title: 'Woobull Charts',
    titleWithComment: 'Woobull Charts',
    category: 'Advanced Trading',
    comment: '',
    _id: 'resource_Woobull-Chartshttp://charts.woobull.com/Advanced-Trading',
    key: 'Woobull-Chartshttp://charts.woobull.com/Advanced-Trading',
    type: 'resource'
  },
  {
    href: 'https://bitcoin.clarkmoody.com/tickers/',
    title: 'All Market Tickers in One Chart',
    titleWithComment: 'All Market Tickers in One Chart',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_All-Market-Tickers-in-One-Charthttps://bitcoin.clarkmoody.com/tickers/Realtime-Exchange-Data',
    key:
      'All-Market-Tickers-in-One-Charthttps://bitcoin.clarkmoody.com/tickers/Realtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'https://onchainfx.com/',
    title: 'Onchain FX',
    titleWithComment: 'Onchain FX',
    category: 'Realtime Exchange Data',
    comment: '',
    _id: 'resource_Onchain-FXhttps://onchainfx.com/Realtime-Exchange-Data',
    key: 'Onchain-FXhttps://onchainfx.com/Realtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'https://coinmarketcap.com/',
    title: 'Coin Market Caps',
    titleWithComment: 'Coin Market Caps',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_Coin-Market-Capshttps://coinmarketcap.com/Realtime-Exchange-Data',
    key: 'Coin-Market-Capshttps://coinmarketcap.com/Realtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'https://coincall.io',
    title: 'Market prices and portfolio feature',
    titleWithComment: 'Market prices and portfolio feature',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_Market-prices-and-portfolio-featurehttps://coincall.ioRealtime-Exchange-Data',
    key:
      'Market-prices-and-portfolio-featurehttps://coincall.ioRealtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'http://cryptomaps.org/',
    title: 'Crypto Market Cap Visualization',
    titleWithComment: 'Crypto Market Cap Visualization',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_Crypto-Market-Cap-Visualizationhttp://cryptomaps.org/Realtime-Exchange-Data',
    key:
      'Crypto-Market-Cap-Visualizationhttp://cryptomaps.org/Realtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'http://bitcoinity.org/markets/bitstamp/USD',
    title: 'Bitcoinity',
    titleWithComment: 'Bitcoinity',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_Bitcoinityhttp://bitcoinity.org/markets/bitstamp/USDRealtime-Exchange-Data',
    key:
      'Bitcoinityhttp://bitcoinity.org/markets/bitstamp/USDRealtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'https://bitcoinaverage.com/en/bitcoin-price/btc-to-usd',
    title: 'Bitcoin Average',
    titleWithComment: 'Bitcoin Average',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_Bitcoin-Averagehttps://bitcoinaverage.com/en/bitcoin-price/btc-to-usdRealtime-Exchange-Data',
    key:
      'Bitcoin-Averagehttps://bitcoinaverage.com/en/bitcoin-price/btc-to-usdRealtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'https://data.bitcoinity.org/markets/volume/30d?c=e&t=b',
    title: 'Bitcoin Market Metrics',
    titleWithComment: 'Bitcoin Market Metrics',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_Bitcoin-Market-Metricshttps://data.bitcoinity.org/markets/volume/30d?c=e&t=bRealtime-Exchange-Data',
    key:
      'Bitcoin-Market-Metricshttps://data.bitcoinity.org/markets/volume/30d?c=e&t=bRealtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'https://bitcoinwisdom.com/',
    title: 'Bitcoin Wisdom',
    titleWithComment: 'Bitcoin Wisdom',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_Bitcoin-Wisdomhttps://bitcoinwisdom.com/Realtime-Exchange-Data',
    key: 'Bitcoin-Wisdomhttps://bitcoinwisdom.com/Realtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'https://blockchain.info/markets/',
    title: 'Blockchain.info',
    titleWithComment: 'Blockchain.info',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_Blockchain.infohttps://blockchain.info/markets/Realtime-Exchange-Data',
    key:
      'Blockchain.infohttps://blockchain.info/markets/Realtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'http://www.coindesk.com/price/',
    title: 'CoinDesk Bitcoin Price Index',
    titleWithComment: 'CoinDesk Bitcoin Price Index',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_CoinDesk-Bitcoin-Price-Indexhttp://www.coindesk.com/price/Realtime-Exchange-Data',
    key:
      'CoinDesk-Bitcoin-Price-Indexhttp://www.coindesk.com/price/Realtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'https://cryptowat.ch',
    title: 'Cryptowatch',
    titleWithComment: 'Cryptowatch',
    category: 'Realtime Exchange Data',
    comment: '',
    _id: 'resource_Cryptowatchhttps://cryptowat.chRealtime-Exchange-Data',
    key: 'Cryptowatchhttps://cryptowat.chRealtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'http://www.tensorcharts.com/',
    title: 'TensorCharts',
    titleWithComment: 'TensorCharts',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_TensorChartshttp://www.tensorcharts.com/Realtime-Exchange-Data',
    key: 'TensorChartshttp://www.tensorcharts.com/Realtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'http://winkdex.com/',
    title: 'Winklevoss Price Index',
    titleWithComment: 'Winklevoss Price Index',
    category: 'Realtime Exchange Data',
    comment: '',
    _id:
      'resource_Winklevoss-Price-Indexhttp://winkdex.com/Realtime-Exchange-Data',
    key: 'Winklevoss-Price-Indexhttp://winkdex.com/Realtime-Exchange-Data',
    type: 'resource'
  },
  {
    href: 'https://bitcoin.tax/',
    title: 'BitcoinTaxes',
    titleWithComment: 'BitcoinTaxes',
    category: 'Tax Accounting',
    comment: '',
    _id: 'resource_BitcoinTaxeshttps://bitcoin.tax/Tax-Accounting',
    key: 'BitcoinTaxeshttps://bitcoin.tax/Tax-Accounting',
    type: 'resource'
  },
  {
    href: 'https://www.cryptotrader.tax/',
    title: 'CryptoTrader.tax',
    titleWithComment: 'CryptoTrader.tax',
    category: 'Tax Accounting',
    comment: '',
    _id: 'resource_CryptoTrader.taxhttps://www.cryptotrader.tax/Tax-Accounting',
    key: 'CryptoTrader.taxhttps://www.cryptotrader.tax/Tax-Accounting',
    type: 'resource'
  },
  {
    href: 'https://www.zenledger.io/',
    title: 'ZenLedger',
    titleWithComment: 'ZenLedger',
    category: 'Tax Accounting',
    comment: '',
    _id: 'resource_ZenLedgerhttps://www.zenledger.io/Tax-Accounting',
    key: 'ZenLedgerhttps://www.zenledger.io/Tax-Accounting',
    type: 'resource'
  },
  {
    href: 'http://www.openbitcoinprivacyproject.org/product-reviews/',
    title: "Open Bitcoin Privacy Project's Wallet Reviews",
    titleWithComment: "Open Bitcoin Privacy Project's Wallet Reviews",
    category: 'Privacy',
    comment: '',
    _id:
      "resource_Open-Bitcoin-Privacy-Project's-Wallet-Reviewshttp://www.openbitcoinprivacyproject.org/product-reviews/Privacy",
    key:
      "Open-Bitcoin-Privacy-Project's-Wallet-Reviewshttp://www.openbitcoinprivacyproject.org/product-reviews/Privacy",
    type: 'resource'
  },
  {
    href: 'https://anonymousbitcoinbook.com/',
    title: 'Anonymous Bitcoin Book',
    titleWithComment: 'Anonymous Bitcoin Book - how to maintain your privacy',
    category: 'Privacy',
    comment: ' how to maintain your privacy',
    _id:
      'resource_Anonymous-Bitcoin-Book---how-to-maintain-your-privacyhttps://anonymousbitcoinbook.com/Privacy',
    key:
      'Anonymous-Bitcoin-Book---how-to-maintain-your-privacyhttps://anonymousbitcoinbook.com/Privacy',
    type: 'resource'
  },
  {
    href: 'https://bitcoin.org/en/protect-your-privacy',
    title: "Bitcoin.org's Privacy Guide",
    titleWithComment: "Bitcoin.org's Privacy Guide",
    category: 'Privacy',
    comment: '',
    _id:
      "resource_Bitcoin.org's-Privacy-Guidehttps://bitcoin.org/en/protect-your-privacyPrivacy",
    key:
      "Bitcoin.org's-Privacy-Guidehttps://bitcoin.org/en/protect-your-privacyPrivacy",
    type: 'resource'
  },
  {
    href: 'https://github.com/JoinMarket-Org/joinmarket-clientserver',
    title: 'JoinMarket: Improve the Privacy of Your Bitcoins and Earn Fees',
    titleWithComment:
      'JoinMarket: Improve the Privacy of Your Bitcoins and Earn Fees',
    category: 'Privacy',
    comment: '',
    _id:
      'resource_JoinMarket:-Improve-the-Privacy-of-Your-Bitcoins-and-Earn-Feeshttps://github.com/JoinMarket-Org/joinmarket-clientserverPrivacy',
    key:
      'JoinMarket:-Improve-the-Privacy-of-Your-Bitcoins-and-Earn-Feeshttps://github.com/JoinMarket-Org/joinmarket-clientserverPrivacy',
    type: 'resource'
  },
  {
    href: 'https://joinmarket.me/blog/blog/tumblebit-for-the-tumble-curious/',
    title: 'How TumbleBit Works',
    titleWithComment: 'How TumbleBit Works',
    category: 'Privacy',
    comment: '',
    _id:
      'resource_How-TumbleBit-Workshttps://joinmarket.me/blog/blog/tumblebit-for-the-tumble-curious/Privacy',
    key:
      'How-TumbleBit-Workshttps://joinmarket.me/blog/blog/tumblebit-for-the-tumble-curious/Privacy',
    type: 'resource'
  },
  {
    href:
      'https://medium.com/@lopp/how-to-run-bitcoin-as-a-tor-hidden-service-on-ubuntu-cff52d543756',
    title: 'How to Run Bitcoin as a Tor Hidden Service on Ubuntu',
    titleWithComment: 'How to Run Bitcoin as a Tor Hidden Service on Ubuntu',
    category: 'Privacy',
    comment: '',
    _id:
      'resource_How-to-Run-Bitcoin-as-a-Tor-Hidden-Service-on-Ubuntuhttps://medium.com/@lopp/how-to-run-bitcoin-as-a-tor-hidden-service-on-ubuntu-cff52d543756Privacy',
    key:
      'How-to-Run-Bitcoin-as-a-Tor-Hidden-Service-on-Ubuntuhttps://medium.com/@lopp/how-to-run-bitcoin-as-a-tor-hidden-service-on-ubuntu-cff52d543756Privacy',
    type: 'resource'
  },
  {
    href: 'https://github.com/nopara73/ZeroLink/',
    title: 'ZeroLink: The Bitcoin Fungibility Framework',
    titleWithComment: 'ZeroLink: The Bitcoin Fungibility Framework',
    category: 'Privacy',
    comment: '',
    _id:
      'resource_ZeroLink:-The-Bitcoin-Fungibility-Frameworkhttps://github.com/nopara73/ZeroLink/Privacy',
    key:
      'ZeroLink:-The-Bitcoin-Fungibility-Frameworkhttps://github.com/nopara73/ZeroLink/Privacy',
    type: 'resource'
  },
  {
    href: 'http://lnroute.com/',
    title: 'Comprehensive Resources List',
    titleWithComment: 'Comprehensive Resources List',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_Comprehensive-Resources-Listhttp://lnroute.com/Lightning-Network',
    key: 'Comprehensive-Resources-Listhttp://lnroute.com/Lightning-Network',
    type: 'resource'
  },
  {
    href: 'https://www.youtube.com/watch?v=rrr_zPmEiME',
    title: "Explain it Like I'm 5",
    titleWithComment: "Explain it Like I'm 5",
    category: 'Lightning Network',
    comment: '',
    _id:
      "resource_Explain-it-Like-I'm-5https://www.youtube.com/watch?v=rrr_zPmEiMELightning-Network",
    key:
      "Explain-it-Like-I'm-5https://www.youtube.com/watch?v=rrr_zPmEiMELightning-Network",
    type: 'resource'
  },
  {
    href: 'https://coincenter.org/entry/what-is-the-lightning-network',
    title: "Explain it Like I'm 25",
    titleWithComment: "Explain it Like I'm 25",
    category: 'Lightning Network',
    comment: '',
    _id:
      "resource_Explain-it-Like-I'm-25https://coincenter.org/entry/what-is-the-lightning-networkLightning-Network",
    key:
      "Explain-it-Like-I'm-25https://coincenter.org/entry/what-is-the-lightning-networkLightning-Network",
    type: 'resource'
  },
  {
    href:
      'https://letstalkbitcoin.com/blog/post/the-lightning-network-elidhdicacs',
    title: "Explained in greater detail in layman's terms",
    titleWithComment: "Explained in greater detail in layman's terms",
    category: 'Lightning Network',
    comment: '',
    _id:
      "resource_Explained-in-greater-detail-in-layman's-termshttps://letstalkbitcoin.com/blog/post/the-lightning-network-elidhdicacsLightning-Network",
    key:
      "Explained-in-greater-detail-in-layman's-termshttps://letstalkbitcoin.com/blog/post/the-lightning-network-elidhdicacsLightning-Network",
    type: 'resource'
  },
  {
    href:
      'https://github.com/lightningnetwork/lightning-rfc/blob/master/00-introduction.md',
    title: 'Technical Specifications (BOLTs)',
    titleWithComment: 'Technical Specifications (BOLTs)',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_Technical-Specifications--BOLTs-https://github.com/lightningnetwork/lightning-rfc/blob/master/00-introduction.mdLightning-Network',
    key:
      'Technical-Specifications--BOLTs-https://github.com/lightningnetwork/lightning-rfc/blob/master/00-introduction.mdLightning-Network',
    type: 'resource'
  },
  {
    href: 'https://medium.com/@AudunGulbrands1/lightning-faq-67bd2b957d70',
    title: 'Lightning Network FAQ',
    titleWithComment: 'Lightning Network FAQ',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_Lightning-Network-FAQhttps://medium.com/@AudunGulbrands1/lightning-faq-67bd2b957d70Lightning-Network',
    key:
      'Lightning-Network-FAQhttps://medium.com/@AudunGulbrands1/lightning-faq-67bd2b957d70Lightning-Network',
    type: 'resource'
  },
  {
    href: 'http://dev.lightning.community/lapps/index.html',
    title: 'Lightning Apps Directory',
    titleWithComment: 'Lightning Apps Directory',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_Lightning-Apps-Directoryhttp://dev.lightning.community/lapps/index.htmlLightning-Network',
    key:
      'Lightning-Apps-Directoryhttp://dev.lightning.community/lapps/index.htmlLightning-Network',
    type: 'resource'
  },
  {
    href:
      'https://github.com/bcongdon/awesome-lightning-network/blob/master/readme.md',
    title: 'Lightning Resources, Apps, & Libraries',
    titleWithComment: 'Lightning Resources, Apps, & Libraries',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_Lightning-Resources,-Apps,-&-Librarieshttps://github.com/bcongdon/awesome-lightning-network/blob/master/readme.mdLightning-Network',
    key:
      'Lightning-Resources,-Apps,-&-Librarieshttps://github.com/bcongdon/awesome-lightning-network/blob/master/readme.mdLightning-Network',
    type: 'resource'
  },
  {
    href: 'http://dev.lightning.community/',
    title: 'Lightning Network Developer site',
    titleWithComment: 'Lightning Network Developer site',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_Lightning-Network-Developer-sitehttp://dev.lightning.community/Lightning-Network',
    key:
      'Lightning-Network-Developer-sitehttp://dev.lightning.community/Lightning-Network',
    type: 'resource'
  },
  {
    href: 'http://swapready.net/',
    title: 'Atomic Swap Readiness charts',
    titleWithComment: 'Atomic Swap Readiness charts',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_Atomic-Swap-Readiness-chartshttp://swapready.net/Lightning-Network',
    key: 'Atomic-Swap-Readiness-chartshttp://swapready.net/Lightning-Network',
    type: 'resource'
  },
  {
    href: 'https://1ml.com/statistics',
    title: 'Network statistics',
    titleWithComment: 'Network statistics',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_Network-statisticshttps://1ml.com/statisticsLightning-Network',
    key: 'Network-statisticshttps://1ml.com/statisticsLightning-Network',
    type: 'resource'
  },
  {
    href: 'https://bitcoinvisuals.com/lightning',
    title: 'More network statistics',
    titleWithComment: 'More network statistics',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_More-network-statisticshttps://bitcoinvisuals.com/lightningLightning-Network',
    key:
      'More-network-statisticshttps://bitcoinvisuals.com/lightningLightning-Network',
    type: 'resource'
  },
  {
    href: 'https://gist.github.com/bretton/798ec38165ffabc719d91e0f4f67552d',
    title: 'Collection of network visualizations',
    titleWithComment: 'Collection of network visualizations',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_Collection-of-network-visualizationshttps://gist.github.com/bretton/798ec38165ffabc719d91e0f4f67552dLightning-Network',
    key:
      'Collection-of-network-visualizationshttps://gist.github.com/bretton/798ec38165ffabc719d91e0f4f67552dLightning-Network',
    type: 'resource'
  },
  {
    href: 'http://lightningnetworkstores.com/',
    title: 'List of stores',
    titleWithComment: 'List of stores',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_List-of-storeshttp://lightningnetworkstores.com/Lightning-Network',
    key: 'List-of-storeshttp://lightningnetworkstores.com/Lightning-Network',
    type: 'resource'
  },
  {
    href: 'https://acceptlightning.com/',
    title: 'Another list/map of stores',
    titleWithComment: 'Another list/map of stores',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_Another-list/map-of-storeshttps://acceptlightning.com/Lightning-Network',
    key:
      'Another-list/map-of-storeshttps://acceptlightning.com/Lightning-Network',
    type: 'resource'
  },
  {
    href: 'https://github.com/Stadicus/guides/blob/master/raspibolt/README.md',
    title: 'RPi Lightning node guide',
    titleWithComment: 'RPi Lightning node guide',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_RPi-Lightning-node-guidehttps://github.com/Stadicus/guides/blob/master/raspibolt/README.mdLightning-Network',
    key:
      'RPi-Lightning-node-guidehttps://github.com/Stadicus/guides/blob/master/raspibolt/README.mdLightning-Network',
    type: 'resource'
  },
  {
    href: 'https://lndecode.com/',
    title: 'Lightning Payment Request Decoder',
    titleWithComment: 'Lightning Payment Request Decoder',
    category: 'Lightning Network',
    comment: '',
    _id:
      'resource_Lightning-Payment-Request-Decoderhttps://lndecode.com/Lightning-Network',
    key:
      'Lightning-Payment-Request-Decoderhttps://lndecode.com/Lightning-Network',
    type: 'resource'
  },
  {
    href: 'https://forks.network/',
    title: 'Fork Usage Comparison',
    titleWithComment: 'Fork Usage Comparison',
    category: 'Bitcoin Forks',
    comment: '',
    _id: 'resource_Fork-Usage-Comparisonhttps://forks.network/Bitcoin-Forks',
    key: 'Fork-Usage-Comparisonhttps://forks.network/Bitcoin-Forks',
    type: 'resource'
  },
  {
    href: 'https://fork.lol/',
    title: 'Mining Stats',
    titleWithComment: 'Mining Stats',
    category: 'Bitcoin Forks',
    comment: '',
    _id: 'resource_Mining-Statshttps://fork.lol/Bitcoin-Forks',
    key: 'Mining-Statshttps://fork.lol/Bitcoin-Forks',
    type: 'resource'
  },
  {
    href: 'https://jochen-hoenicke.de/queue/cash/#24h',
    title: 'Mempool Comparisons',
    titleWithComment: 'Mempool Comparisons',
    category: 'Bitcoin Forks',
    comment: '',
    _id:
      'resource_Mempool-Comparisonshttps://jochen-hoenicke.de/queue/cash/#24hBitcoin-Forks',
    key:
      'Mempool-Comparisonshttps://jochen-hoenicke.de/queue/cash/#24hBitcoin-Forks',
    type: 'resource'
  },
  {
    href: 'https://coin.dance/poli',
    title: 'Fork Support by Company',
    titleWithComment: 'Fork Support by Company',
    category: 'Bitcoin Forks',
    comment: '',
    _id: 'resource_Fork-Support-by-Companyhttps://coin.dance/poliBitcoin-Forks',
    key: 'Fork-Support-by-Companyhttps://coin.dance/poliBitcoin-Forks',
    type: 'resource'
  },
  {
    href: 'http://statocashi.info/',
    title: 'BCH Node Stats',
    titleWithComment: 'BCH Node Stats',
    category: 'Bitcoin Forks',
    comment: '',
    _id: 'resource_BCH-Node-Statshttp://statocashi.info/Bitcoin-Forks',
    key: 'BCH-Node-Statshttp://statocashi.info/Bitcoin-Forks',
    type: 'resource'
  },
  {
    href: 'https://btcdiv.com/',
    title: 'How to Claim Airdrops',
    titleWithComment: 'How to Claim Airdrops',
    category: 'Bitcoin Forks',
    comment: '',
    _id: 'resource_How-to-Claim-Airdropshttps://btcdiv.com/Bitcoin-Forks',
    key: 'How-to-Claim-Airdropshttps://btcdiv.com/Bitcoin-Forks',
    type: 'resource'
  },
  {
    href: 'https://forkdrop.io',
    title: 'forkdrop.io',
    titleWithComment: 'forkdrop.io (Directory of Bitcoin Forks and Exchanges)',
    category: 'Bitcoin Forks',
    comment: 'Directory of Bitcoin Forks and Exchanges',
    _id:
      'resource_forkdrop.io--Directory-of-Bitcoin-Forks-and-Exchanges-https://forkdrop.ioBitcoin-Forks',
    key:
      'forkdrop.io--Directory-of-Bitcoin-Forks-and-Exchanges-https://forkdrop.ioBitcoin-Forks',
    type: 'resource'
  },
  {
    href: 'https://cryptoconsortium.org/',
    title: 'CryptoCurrency Certification Consortium',
    titleWithComment: 'CryptoCurrency Certification Consortium',
    category: 'Crypto Careers',
    comment: '',
    _id:
      'resource_CryptoCurrency-Certification-Consortiumhttps://cryptoconsortium.org/Crypto-Careers',
    key:
      'CryptoCurrency-Certification-Consortiumhttps://cryptoconsortium.org/Crypto-Careers',
    type: 'resource'
  },
  {
    href: 'https://angel.co/blockchains/jobs',
    title: 'AngelList Blockchain Startups',
    titleWithComment: 'AngelList Blockchain Startups',
    category: 'Crypto Careers',
    comment: '',
    _id:
      'resource_AngelList-Blockchain-Startupshttps://angel.co/blockchains/jobsCrypto-Careers',
    key:
      'AngelList-Blockchain-Startupshttps://angel.co/blockchains/jobsCrypto-Careers',
    type: 'resource'
  },
  {
    href: 'https://coinality.com/',
    title: 'Coinality',
    titleWithComment: 'Coinality',
    category: 'Crypto Careers',
    comment: '',
    _id: 'resource_Coinalityhttps://coinality.com/Crypto-Careers',
    key: 'Coinalityhttps://coinality.com/Crypto-Careers',
    type: 'resource'
  },
  {
    href: 'https://crypto.jobs/',
    title: 'Crypto Jobs',
    titleWithComment: 'Crypto Jobs',
    category: 'Crypto Careers',
    comment: '',
    _id: 'resource_Crypto-Jobshttps://crypto.jobs/Crypto-Careers',
    key: 'Crypto-Jobshttps://crypto.jobs/Crypto-Careers',
    type: 'resource'
  },
  {
    href: 'https://cryptocurrencyjobs.co/',
    title: 'Cryptocurrency Jobs',
    titleWithComment: 'Cryptocurrency Jobs',
    category: 'Crypto Careers',
    comment: '',
    _id:
      'resource_Cryptocurrency-Jobshttps://cryptocurrencyjobs.co/Crypto-Careers',
    key: 'Cryptocurrency-Jobshttps://cryptocurrencyjobs.co/Crypto-Careers',
    type: 'resource'
  },
  {
    href: 'https://cryptojobslist.com/',
    title: 'Crypto Jobs List',
    titleWithComment: 'Crypto Jobs List',
    category: 'Crypto Careers',
    comment: '',
    _id: 'resource_Crypto-Jobs-Listhttps://cryptojobslist.com/Crypto-Careers',
    key: 'Crypto-Jobs-Listhttps://cryptojobslist.com/Crypto-Careers',
    type: 'resource'
  },
  {
    href: 'https://blockchaindevjobs.com/',
    title: 'Developer Jobs',
    titleWithComment: 'Developer Jobs',
    category: 'Crypto Careers',
    comment: '',
    _id: 'resource_Developer-Jobshttps://blockchaindevjobs.com/Crypto-Careers',
    key: 'Developer-Jobshttps://blockchaindevjobs.com/Crypto-Careers',
    type: 'resource'
  },
  {
    href: 'https://www.cryptogrind.com/',
    title: 'Freelance Gigs',
    titleWithComment: 'Freelance Gigs',
    category: 'Crypto Careers',
    comment: '',
    _id: 'resource_Freelance-Gigshttps://www.cryptogrind.com/Crypto-Careers',
    key: 'Freelance-Gigshttps://www.cryptogrind.com/Crypto-Careers',
    type: 'resource'
  },
  {
    href: 'https://www.reddit.com/r/Jobs4Bitcoins/',
    title: 'Jobs4Bitcoins subreddit',
    titleWithComment: 'Jobs4Bitcoins subreddit',
    category: 'Crypto Careers',
    comment: '',
    _id:
      'resource_Jobs4Bitcoins-subreddithttps://www.reddit.com/r/Jobs4Bitcoins/Crypto-Careers',
    key:
      'Jobs4Bitcoins-subreddithttps://www.reddit.com/r/Jobs4Bitcoins/Crypto-Careers',
    type: 'resource'
  },
  {
    href:
      'https://en.bitcoin.it/wiki/Donation-accepting_organizations_and_projects',
    title: 'Charities that accept BTC',
    titleWithComment: 'Charities that accept BTC',
    category: 'Crypto Charity',
    comment: '',
    _id:
      'resource_Charities-that-accept-BTChttps://en.bitcoin.it/wiki/Donation-accepting_organizations_and_projectsCrypto-Charity',
    key:
      'Charities-that-accept-BTChttps://en.bitcoin.it/wiki/Donation-accepting_organizations_and_projectsCrypto-Charity',
    type: 'resource'
  },
  {
    href: 'http://bitcoinforcharity.com/bitcoin-charity-list/',
    title: 'More BTC acccepting charities',
    titleWithComment: 'More BTC acccepting charities',
    category: 'Crypto Charity',
    comment: '',
    _id:
      'resource_More-BTC-acccepting-charitieshttp://bitcoinforcharity.com/bitcoin-charity-list/Crypto-Charity',
    key:
      'More-BTC-acccepting-charitieshttp://bitcoinforcharity.com/bitcoin-charity-list/Crypto-Charity',
    type: 'resource'
  },
  {
    href: 'https://www.bitgivefoundation.org/',
    title: 'BitGive',
    titleWithComment: 'BitGive',
    category: 'Crypto Charity',
    comment: '',
    _id: 'resource_BitGivehttps://www.bitgivefoundation.org/Crypto-Charity',
    key: 'BitGivehttps://www.bitgivefoundation.org/Crypto-Charity',
    type: 'resource'
  },
  {
    href: 'https://bithope.org/',
    title: 'BitHope',
    titleWithComment: 'BitHope',
    category: 'Crypto Charity',
    comment: '',
    _id: 'resource_BitHopehttps://bithope.org/Crypto-Charity',
    key: 'BitHopehttps://bithope.org/Crypto-Charity',
    type: 'resource'
  },
  {
    href:
      'https://www.fidelitycharitable.org/giving-account/what-you-can-donate/donating-bitcoin-to-charity.shtml',
    title: 'Fidelity Charitable',
    titleWithComment: 'Fidelity Charitable',
    category: 'Crypto Charity',
    comment: '',
    _id:
      'resource_Fidelity-Charitablehttps://www.fidelitycharitable.org/giving-account/what-you-can-donate/donating-bitcoin-to-charity.shtmlCrypto-Charity',
    key:
      'Fidelity-Charitablehttps://www.fidelitycharitable.org/giving-account/what-you-can-donate/donating-bitcoin-to-charity.shtmlCrypto-Charity',
    type: 'resource'
  },
  {
    href: 'https://bitcoincore.org/en/about/sponsorship/programme/',
    title: 'Bitcoin Core Sponsorship Program',
    titleWithComment: 'Bitcoin Core Sponsorship Program',
    category: 'Crypto Charity',
    comment: '',
    _id:
      'resource_Bitcoin-Core-Sponsorship-Programhttps://bitcoincore.org/en/about/sponsorship/programme/Crypto-Charity',
    key:
      'Bitcoin-Core-Sponsorship-Programhttps://bitcoincore.org/en/about/sponsorship/programme/Crypto-Charity',
    type: 'resource'
  },
  {
    href: 'https://github.com/BlockchainGuild/BlockchainGuildCommunity',
    title: 'Blockchain Guild',
    titleWithComment: 'Blockchain Guild',
    category: 'Crypto Charity',
    comment: '',
    _id:
      'resource_Blockchain-Guildhttps://github.com/BlockchainGuild/BlockchainGuildCommunityCrypto-Charity',
    key:
      'Blockchain-Guildhttps://github.com/BlockchainGuild/BlockchainGuildCommunityCrypto-Charity',
    type: 'resource'
  },
  {
    href: 'http://dignitasinternational.org/give/bitcoin/',
    title: 'Dignitas International',
    titleWithComment: 'Dignitas International',
    category: 'Crypto Charity',
    comment: '',
    _id:
      'resource_Dignitas-Internationalhttp://dignitasinternational.org/give/bitcoin/Crypto-Charity',
    key:
      'Dignitas-Internationalhttp://dignitasinternational.org/give/bitcoin/Crypto-Charity',
    type: 'resource'
  },
  {
    href: 'http://www.maps.org/donate-redirect/cryptocurrency',
    title: 'Multidisciplinary Association for Psychedelic Studies',
    titleWithComment: 'Multidisciplinary Association for Psychedelic Studies',
    category: 'Crypto Charity',
    comment: '',
    _id:
      'resource_Multidisciplinary-Association-for-Psychedelic-Studieshttp://www.maps.org/donate-redirect/cryptocurrencyCrypto-Charity',
    key:
      'Multidisciplinary-Association-for-Psychedelic-Studieshttp://www.maps.org/donate-redirect/cryptocurrencyCrypto-Charity',
    type: 'resource'
  },
  {
    href: 'https://www.pathwaystoeducation.ca/donate-bitcoin',
    title: 'Pathways to Education',
    titleWithComment: 'Pathways to Education',
    category: 'Crypto Charity',
    comment: '',
    _id:
      'resource_Pathways-to-Educationhttps://www.pathwaystoeducation.ca/donate-bitcoinCrypto-Charity',
    key:
      'Pathways-to-Educationhttps://www.pathwaystoeducation.ca/donate-bitcoinCrypto-Charity',
    type: 'resource'
  },
  {
    href: 'http://warchild.ca/donate/',
    title: 'War Child',
    titleWithComment: 'War Child',
    category: 'Crypto Charity',
    comment: '',
    _id: 'resource_War-Childhttp://warchild.ca/donate/Crypto-Charity',
    key: 'War-Childhttp://warchild.ca/donate/Crypto-Charity',
    type: 'resource'
  }
]

export { companies, data, resources }
