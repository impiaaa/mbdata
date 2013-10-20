// Copyright (C) 2013 Lukas Lalinsky
// Distributed under the MIT license, see the LICENSE file for details.

'use strict';

app.directive('mbArtistCredit', function () {
    return {
        scope: {
            artists: '=mbArtistCredit'
        },
        template:
            '<span ng-repeat="artist in artists">' +
                '<a href="/artist/{{ artist.id }}">' +
                    '{{ artist.credited_name || artist.name }}' +
                '</a>' +
                '{{ artist.join_phrase }}' +
            '</span>'
    };
});
