(function(){if(window.define)var e=window.define;if(window.require)var t=window.require;if(window.jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd.define,t=jQuery.fn.select2.amd.require;e("select2/i18n/da",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Angiv venligst "+t+" tegn mindre";return n},inputTooShort:function(e){var t=e.minimum-e.input.length,n="Angiv venligst "+t+" tegn mere";return n},loadingMore:function(){return"Indlæser flere resultater…"},maximumSelected:function(e){var t="Du kan kun vælge "+e.maximum+" emne";return e.maximum!=1&&(t+="r"),t},noResults:function(){return"Ingen resultater fundet"},searching:function(){return"Søger…"}}}),t("Select2"),jQuery.fn.select2.amd={define:e,require:t}})();