webpackJsonp([2],{"./client/src/legacy/TinyMCE_sslink-email.js":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(2),r=n(a),l=i(12),o=n(l),s=i(0),d=n(s),c=i(7),u=n(c),m=i(1),p=n(m),f=i(17),g=i(5);o.default.addAction("sslink",{text:r.default._t("Admin.LINKLABEL_EMAIL","Link to email address"),onclick:function(e){return e.execCommand("sslinkemail")},priority:51}).addCommandWithUrlTest("sslinkemail",/^mailto:/);var k={init:function(e){e.addCommand("sslinkemail",function(){window.jQuery("#"+e.id).entwine("ss").openLinkEmailDialog()})}},_="insert-link__dialog-wrapper--email",h=(0,g.loadComponent)((0,f.createInsertLinkModal)("SilverStripe\\Admin\\LeftAndMain","EditorEmailLink"));p.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkEmailDialog:function(){var t=e("#"+_);t.length||(t=e('<div id="'+_+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+_).entwine({renderModal:function(e){var t=this,i=function(){return t.close()},n=function(){return t.handleInsert.apply(t,arguments)},a=this.getOriginalAttributes(),l=tinymce.activeEditor.selection,o=l.getContent()||"",s=l.getNode().tagName,c="A"!==s&&""===o.trim();u.default.render(d.default.createElement(h,{isOpen:e,onInsert:n,onClosed:i,title:r.default._t("Admin.LINK_EMAIL","Insert email link"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--email",fileAttributes:a,identifier:"Admin.InsertLinkEmailModal",requireLinkText:c}),this[0])},getOriginalAttributes:function(){var t=this.getElement().getEditor(),i=e(t.getSelectedNode()),n=(i.attr("href")||"").split("?"),a=n[0].replace(/^mailto:/,"").split("?")[0];a.match(/.+@.+\..+/)||(a="");var r=n[1]?n[1].match(/subject=([^&]+)/):"";return{Link:a,Subject:r?decodeURIComponent(r[1]):"",Description:i.attr("title")}},buildAttributes:function(e){var t=this._super(e),i="",n=t.href.replace(/^mailto:/,"").split("?")[0];return n.match(/.+@.+\..+/)||(n=""),n&&(i="mailto:"+n),i&&e.Subject&&(i=i+"?subject="+encodeURIComponent(e.Subject)),t.href=i,delete t.target,t}})}),tinymce.PluginManager.add("sslinkemail",function(e){return k.init(e)}),t.default=k},12:function(e,t){e.exports=TinyMCEActionRegistrar},17:function(e,t){e.exports=InsertLinkModal},2:function(e,t){e.exports=i18n},5:function(e,t){e.exports=Injector}},["./client/src/legacy/TinyMCE_sslink-email.js"]);