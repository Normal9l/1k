let handler = function (m) {
  // this.sendContact(m.chat, '6281807254833', '><', m)
  conn.sendContact(m.chat, '6281807254833', 'IBNU OFFICIAL🅥⁩', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(kontak)$/i

module.exports = handler
