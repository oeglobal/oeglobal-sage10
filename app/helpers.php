<?php

namespace App;

function is_latam() {
    if (OEG_SITE === 'LATAM')
        return true;
}

function is_oeg() {
    if (OEG_SITE === 'OEG')
        return true;
}

function is_conference() {
    if (OEG_SITE === 'CONFERENCE2020')
        return true;
}
