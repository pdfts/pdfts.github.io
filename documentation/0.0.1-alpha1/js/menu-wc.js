'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@pdfts/core documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Annot.html" data-type="entity-link">Annot</a>
                            </li>
                            <li class="link">
                                <a href="classes/Catalog.html" data-type="entity-link">Catalog</a>
                            </li>
                            <li class="link">
                                <a href="classes/ControlCharacters.html" data-type="entity-link">ControlCharacters</a>
                            </li>
                            <li class="link">
                                <a href="classes/Diverda.html" data-type="entity-link">Diverda</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmbeddedFile.html" data-type="entity-link">EmbeddedFile</a>
                            </li>
                            <li class="link">
                                <a href="classes/Font.html" data-type="entity-link">Font</a>
                            </li>
                            <li class="link">
                                <a href="classes/FontDescriptor.html" data-type="entity-link">FontDescriptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/FontEncoding.html" data-type="entity-link">FontEncoding</a>
                            </li>
                            <li class="link">
                                <a href="classes/FontFile.html" data-type="entity-link">FontFile</a>
                            </li>
                            <li class="link">
                                <a href="classes/FontWidths.html" data-type="entity-link">FontWidths</a>
                            </li>
                            <li class="link">
                                <a href="classes/Header.html" data-type="entity-link">Header</a>
                            </li>
                            <li class="link">
                                <a href="classes/MetaData.html" data-type="entity-link">MetaData</a>
                            </li>
                            <li class="link">
                                <a href="classes/Names.html" data-type="entity-link">Names</a>
                            </li>
                            <li class="link">
                                <a href="classes/Offset.html" data-type="entity-link">Offset</a>
                            </li>
                            <li class="link">
                                <a href="classes/Page.html" data-type="entity-link">Page</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pages.html" data-type="entity-link">Pages</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageSize.html" data-type="entity-link">PageSize</a>
                            </li>
                            <li class="link">
                                <a href="classes/PageSizes.html" data-type="entity-link">PageSizes</a>
                            </li>
                            <li class="link">
                                <a href="classes/PDFDocument.html" data-type="entity-link">PDFDocument</a>
                            </li>
                            <li class="link">
                                <a href="classes/PdfObject.html" data-type="entity-link">PdfObject</a>
                            </li>
                            <li class="link">
                                <a href="classes/PdfObjectReference.html" data-type="entity-link">PdfObjectReference</a>
                            </li>
                            <li class="link">
                                <a href="classes/Sig.html" data-type="entity-link">Sig</a>
                            </li>
                            <li class="link">
                                <a href="classes/Trailer.html" data-type="entity-link">Trailer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Widget.html" data-type="entity-link">Widget</a>
                            </li>
                            <li class="link">
                                <a href="classes/XMPMeta.html" data-type="entity-link">XMPMeta</a>
                            </li>
                            <li class="link">
                                <a href="classes/Xref.html" data-type="entity-link">Xref</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IPDFObjectArray.html" data-type="entity-link">IPDFObjectArray</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});