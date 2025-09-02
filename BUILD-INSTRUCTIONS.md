# Instruções para Build de Produção - Hostinger

## 📋 Verificação Pré-Build

✅ **Links corrigidos**: Todos os links internos usam componentes `Link` do React Router
✅ **Rotas configuradas**: Todas as páginas estão configuradas no App.tsx
✅ **SEO otimizado**: Meta tags, structured data e sitemap implementados
✅ **Assets otimizados**: Imagens e recursos estão configurados corretamente
✅ **Configuração Hostinger**: .htaccess e configurações de build prontas

## 🛠️ Como gerar o build para produção

1. **Instalar dependências** (se necessário):
```bash
npm install
```

2. **Gerar o build otimizado**:
```bash
npm run build
```

3. **O build será criado na pasta `dist/`** com:
   - `index.html` - Arquivo principal
   - `assets/` - CSS, JS e imagens otimizadas
   - `.htaccess` - Configuração para Hostinger
   - `robots.txt` e `sitemap.xml` - SEO

## 📁 Estrutura do Build Final

```
dist/
├── index.html                 # Página principal
├── .htaccess                 # Configuração Apache/Hostinger
├── robots.txt                # Instruções para bots
├── sitemap.xml               # Mapa do site
├── favicon.ico               # Ícone do site
├── assets/                   # Recursos otimizados
│   ├── *.css                # Estilos minificados
│   ├── *.js                 # JavaScript minificado
│   └── *.png|jpg|svg        # Imagens otimizadas
└── lovable-uploads/          # Imagens específicas do projeto
```

## 🚀 Upload para Hostinger

1. **Acesse o cPanel do Hostinger**
2. **Vá para "Gerenciador de Arquivos"**
3. **Navegue até a pasta `public_html/`**
4. **Delete conteúdo existente** (se houver)
5. **Upload todos os arquivos da pasta `dist/`**
6. **Certifique-se que o `index.html` está na raiz do `public_html/`**

## ✅ Verificações Pós-Deploy

- [ ] Site carrega corretamente na URL principal
- [ ] Navegação entre páginas funciona (sem reload da página)
- [ ] Links do footer e header funcionam
- [ ] Imagens carregam corretamente
- [ ] Formulários funcionam
- [ ] SEO tags aparecem no view-source

## 🔧 Configurações Técnicas Implementadas

### Vite Config
- **Base**: `./ ` para caminhos relativos
- **Build otimizado**: Minificação e compressão
- **Assets**: Organizados na pasta assets/

### .htaccess
- **React Router**: Redirecionamento para SPA
- **Cache**: Configurado para assets estáticos
- **Compressão**: Gzip ativado
- **Segurança**: Headers de proteção

### SEO
- **Meta tags**: Completas para cada página
- **Structured Data**: Schema.org implementado
- **Open Graph**: Facebook e Twitter cards
- **Sitemap**: XML com todas as páginas

## 🐛 Resolução de Problemas

### Página 404 ao acessar rotas diretamente
- **Causa**: .htaccess não está funcionando
- **Solução**: Verificar se o .htaccess foi uploadado para public_html/

### Imagens não carregam
- **Causa**: Caminhos incorretos
- **Solução**: Verificar se a pasta lovable-uploads/ foi uploadada

### CSS/JS não carrega
- **Causa**: Configuração de cache muito agressiva
- **Solução**: Limpar cache do browser e verificar assets/

## 📞 Suporte

Para problemas específicos do Hostinger:
- Documentação: https://support.hostinger.com
- Chat: Através do painel do Hostinger

Para problemas do código:
- Verificar console do browser (F12)
- Verificar logs do servidor no cPanel