    <!-- Load in Bootstrap -->
    <script src="http://www.digitalmeasures.com/_media/js/bootstrap.2.3.1.min.js" type="text/javascript"></script>

    <!-- Load in Typekit -->
    <script type="text/javascript" src="http://use.typekit.net/lsx2ibj.js"></script>
    <script type="text/javascript">
        try {
            Typekit.load();
        } catch (e) {}
    </script>

    <script type="text/javascript">
        // Function to support modification of element's class when collapse function is toggled.
        // Style was already present from the designers, but never used. - JBS 08-31-2013
        $(function() {
            $('.accordion').on('show', function(e) {
                $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('open');
            });

            $('.accordion').on('shown', function(e) {
                e.preventDefault();

                var hashTag = $(e.target);
                var top = 0;

                if ($(hashTag).offset()) {
                    top = $(hashTag).offset().top - 136;
                }

                $('html, body').animate({
                    scrollTop: top
                }, 200);
            })

            $('.accordion').on('hide', function(e) {
                e.stopPropagation(); //Remain at this level, don't propagate to the parent level. Fix for nested accordion collapse.
                $(this).find('.accordion-toggle').not($(e.target)).removeClass('open');
            });
        });
    </script>

    <script type="text/javascript">
        piAId = '191742';
        piCId = '1228';
        if (!window['pi']) {
            window['pi'] = {};
        }
        pi = window['pi'];
        if (!pi['tracker']) {
            pi['tracker'] = {};
        }
        pi.tracker.pi_form = true;
        (function() {
            function async_load() {
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
                var c = document.getElementsByTagName('script')[0];
                c.parentNode.insertBefore(s, c);
            }
            if (window.attachEvent) {
                window.attachEvent('onload', async_load);
            } else {
                window.addEventListener('load', async_load, false);
            }
        })();
    </script>
<script type="text/javascript">
        //PROD tk - lsx2ibj.js
        $(function() {

            $('#carousel').carouFredSel({
                width: '100%',
                items: {
                    visible: 'odd+2'
                },
                scroll: {
                    pauseOnHover: false,
                    onBefore: function() {
                        $(this).children().removeClass('hover');
                    }
                },
                auto: {
                    items: 1,
                    easing: 'linear',
                    duration: 2500,
                    timeoutDuration: 0
                },
                pagination: {
                    container: '#pager',
                    items: 1,
                    duration: 0.5,
                    queue: 'last',
                    onAfter: function() {
                        var cur = $(this).triggerHandler('currentVisible'),
                            mid = Math.floor(cur.length / 2);

                        cur.eq(mid).addClass('hover');
                    }
                }
            });

        });
    </script>
