# Description #

Contient les divers fichiers utilisés pour personnaliser la bannière du Blob Parleur

## Liens de navigation ##

Les liens de navigation sont modifiés et une classe CSS leur est ajoutée, afin de pouvoir personnaliser leur apparence, mais aussi leur position

## Bannière ##

La bannière est tout d'abord insérée, puis les liens de navigations sont ajoutées par la suite, avec un margin-top négatif.
Chaque lien de navigation est ensuite positionnée en absolu, vu que la bannière est uniquement visible dans la version "desktop" et non mobile

# Comment faire fonctionner #

## Script ##

Copier-coller le contenu du script .js dans une balise **script** que vous mettrez dans le template **overall_header** après **{GENERATED_NAV_BAR}**

```
<div id="navigation">{GENERATED_NAV_BAR}</div>

<script type="text/javascript">
//<![CDATA[
// ... Contenu du script .js
//]]>
</script>
```