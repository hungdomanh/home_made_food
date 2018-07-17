<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Food_img extends Model
{
    protected $table = 'my_food_imgs';

    public function food()
    {
        return $this->belongsTo('App\Food');
    }
}