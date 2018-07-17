<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = 'my_images';

    public function category()
    {
        return $this->belongsTo('App\Category');
    }
}